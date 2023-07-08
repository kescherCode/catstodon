# frozen_string_literal: true

require 'rails_helper'

describe UnreactWorker do
  let(:worker) { described_class.new }

  describe 'perform' do
    it 'runs without error for missing record' do
      account_id = nil
      status_id = nil
      emoji = nil
      expect { worker.perform(account_id, status_id, emoji) }.to_not raise_error
    end
  end
end
