# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ActivityPub::Activity::Like do
  let(:sender)    { Fabricate(:account) }
  let(:recipient) { Fabricate(:account) }
  let(:status)    { Fabricate(:status, account: recipient) }

  let(:json) do
    {
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: 'foo',
      type: 'Like',
      actor: ActivityPub::TagManager.instance.uri_for(sender),
      object: ActivityPub::TagManager.instance.uri_for(status),
    }.with_indifferent_access
  end

  describe '#perform' do
    subject { described_class.new(json, sender) }

    before do
      stub_request(:get, 'http://example.com/emoji.png').to_return(body: attachment_fixture('emojo.png'))
      subject.perform
    end

    it 'creates a favourite from sender to status' do
      expect(sender.favourited?(status)).to be true
    end

    context 'when a Misskey reaction' do
      context 'with emoji' do
        let(:json) do
          {
            '@context': 'https://www.w3.org/ns/activitystreams',
            id: 'foo',
            type: 'Like',
            _misskey_reaction: '👍',
            actor: ActivityPub::TagManager.instance.uri_for(sender),
            object: ActivityPub::TagManager.instance.uri_for(status),
          }.with_indifferent_access
        end

        it 'does not create a favourite from sender to status' do
          expect(sender.favourited?(status)).to be false
        end

        it 'creates a status reaction from sender to status' do
          expect(sender.reacted?(status, '👍')).to be true
        end
      end

      context 'with custom emoji' do
        let(:json) do
          {
            '@context': 'https://www.w3.org/ns/activitystreams',
            id: 'foo',
            type: 'Like',
            _misskey_reaction: +':tinking:',
            tag: [
              {
                type: 'Emoji',
                icon: {
                  url: 'http://example.com/emoji.png',
                },
                name: 'tinking',
              },
            ],
            actor: ActivityPub::TagManager.instance.uri_for(sender),
            object: ActivityPub::TagManager.instance.uri_for(status),
          }.with_indifferent_access
        end

        it 'does not create a favourite from sender to status' do
          expect(sender.favourited?(status)).to be false
        end

        it 'creates a reaction from sender to status' do
          expect(sender.reacted?(status, 'tinking', CustomEmoji.find_by(shortcode: 'tinking', domain: sender.domain))).to be true
        end
      end
    end
  end

  describe '#maybe_process_misskey_reaction' do
    subject { described_class.new(json, sender) }

    context 'when given a Misskey reaction' do
      context 'with emoji' do
        let(:json) do
          {
            '@context': 'https://www.w3.org/ns/activitystreams',
            id: 'foo',
            type: 'Like',
            _misskey_reaction: '👍',
            actor: ActivityPub::TagManager.instance.uri_for(sender),
            object: ActivityPub::TagManager.instance.uri_for(status),
          }.with_indifferent_access
        end

        it 'retruns true' do
          expect(subject.maybe_process_misskey_reaction).to be true
        end
      end

      context 'with custom emoji' do
        let(:json) do
          {
            '@context': 'https://www.w3.org/ns/activitystreams',
            id: 'foo',
            type: 'Like',
            _misskey_reaction: +':tinking:',
            tag: [
              {
                type: 'Emoji',
                icon: {
                  url: 'http://example.com/emoji.png',
                },
                name: 'tinking',
              },
            ],
            actor: ActivityPub::TagManager.instance.uri_for(sender),
            object: ActivityPub::TagManager.instance.uri_for(status),
          }.with_indifferent_access
        end

        before do
          stub_request(:get, 'http://example.com/emoji.png').to_return(body: attachment_fixture('emojo.png'))
        end

        it 'returns true' do
          expect(subject.maybe_process_misskey_reaction).to be true
        end
      end
    end

    context 'when given a regular like' do
      it 'returns false' do
        expect(subject.maybe_process_misskey_reaction).to be false
      end
    end
  end
end
