# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::Statuses::ReactionsController do
  render_views

  let(:user)  { Fabricate(:user) }
  let(:app)   { Fabricate(:application, name: 'Test app', website: 'http://testapp.com') }
  let(:token) { Fabricate(:accessible_access_token, resource_owner_id: user.id, scopes: 'write:favourites', application: app) }

  context 'with an oauth token' do
    before do
      allow(controller).to receive(:doorkeeper_token) { token }
    end

    describe 'POST #create' do
      let(:status) { Fabricate(:status, account: user.account) }

      before do
        post :create, params: { status_id: status.id, id: '👍' }
      end

      context 'with public status' do
        it 'returns http success' do
          expect(response).to have_http_status(200)
        end

        it 'updates the reacted attribute' do
          expect(user.account.reacted?(status, '👍')).to be true
        end

        it 'returns json with updated attributes' do
          hash_body = body_as_json

          expect(hash_body[:id]).to eq status.id.to_s
          expect(hash_body[:reactions]).to_not be_empty
          expect(hash_body[:reactions][0][:count]).to be 1
          expect(hash_body[:reactions][0][:me]).to be true
          expect(hash_body[:reactions][0][:name]).to eq '👍'
        end
      end

      context 'with private status of not-followed account' do
        let(:status) { Fabricate(:status, visibility: :private) }

        it 'returns http not found' do
          expect(response).to have_http_status(404)
        end
      end
    end

    describe 'POST #destroy' do
      context 'with public status' do
        let(:status) { Fabricate(:status, account: user.account) }

        before do
          ReactService.new.call(user.account, status, '👍')
          post :destroy, params: { status_id: status.id, id: '👍' }
        end

        it 'returns http success' do
          expect(response).to have_http_status(200)
        end

        it 'updates the reacted attribute' do
          expect(user.account.reacted?(status, '👍')).to be false
        end

        it 'returns json with updated attributes' do
          hash_body = body_as_json

          expect(hash_body[:id]).to eq status.id.to_s
          expect(hash_body[:reactions]).to be_empty
        end
      end

      context 'with public status when blocked by its author' do
        let(:status) { Fabricate(:status) }

        before do
          ReactService.new.call(user.account, status, '👍')
          status.account.block!(user.account)
          post :destroy, params: { status_id: status.id, id: '👍' }
        end

        it 'returns http success' do
          expect(response).to have_http_status(200)
        end

        it 'updates the reacted attribute' do
          expect(user.account.reacted?(status, '👍')).to be false
        end

        it 'returns json with updated attributes' do
          hash_body = body_as_json

          expect(hash_body[:id]).to eq status.id.to_s
          expect(hash_body[:reactions]).to be_empty
        end
      end

      context 'with private status that was not reacted to' do
        let(:status) { Fabricate(:status, visibility: :private) }

        before do
          post :destroy, params: { status_id: status.id, id: '👍' }
        end

        it 'returns http not found' do
          expect(response).to have_http_status(404)
        end
      end
    end
  end
end
