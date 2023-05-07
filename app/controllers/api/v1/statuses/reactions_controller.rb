# frozen_string_literal: true

class Api::V1::Statuses::ReactionsController < Api::BaseController
  include Authorization

  before_action -> { doorkeeper_authorize! :write, :'write:favourites' }
  before_action :require_user!
  before_action :set_status, only: [:create]

  def create
    ReactService.new.call(current_account, @status, params[:id])
    render json: @status, serializer: REST::StatusSerializer
  end

  def destroy
    react = current_account.status_reactions.find_by(status_id: params[:status_id], name: params[:id])

    if react
      @status = react.status
      UnreactWorker.perform_async(current_account.id, @status.id, params[:id])
    else
      @status = Status.find(params[:status_id])
      authorize @status, :show?
    end

    render json: @status, serializer: REST::StatusSerializer, relationships: StatusRelationshipsPresenter.new([@status], current_account.id, reactions_map: { @status.id => false })
  rescue Mastodon::NotPermittedError
    not_found
  end

  private

  def set_status
    @status = Status.find(params[:status_id])
    authorize @status, :show?
  rescue Mastodon::NotPermittedError
    not_found
  end
end
