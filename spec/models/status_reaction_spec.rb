# frozen_string_literal: true

require 'rails_helper'

RSpec.describe StatusReaction do
  let(:account) { Fabricate(:account) }
  let(:status) { Fabricate(:status) }

  describe 'validations' do
    let(:custom_emoji) { Fabricate(:custom_emoji) }

    it 'is invalid without name' do
      expect(described_class.new(name: '', account: account, status: status)).to_not be_valid
      expect(described_class.new(name: '', account: account, status: status, custom_emoji: custom_emoji)).to_not be_valid
    end

    it 'is valid with name' do
      expect(described_class.new(name: '👍', account: account, status: status)).to be_valid
      expect(described_class.new(name: custom_emoji.shortcode, account: account, status: status, custom_emoji: custom_emoji)).to be_valid
    end
  end

  describe 'before validations' do
    let(:custom_emoji) { Fabricate(:custom_emoji) }
    let(:remote_custom_emoji) { Fabricate(:custom_emoji, domain: 'example.com') }
    let(:disabled_custom_emoji) { Fabricate(:custom_emoji, disabled: true) }

    context 'when given a local custom emoji' do
      it 'sets custom_emoji to local custom emoji' do
        expect(described_class.create(name: custom_emoji.shortcode, account: account, status: status, custom_emoji: custom_emoji).custom_emoji).to eq custom_emoji
      end
    end

    context 'when given a remote custom emoji' do
      it 'sets custom_emoji to remote custom emoji' do
        expect(described_class.create(name: remote_custom_emoji.shortcode, account: account, status: status, custom_emoji: remote_custom_emoji).custom_emoji).to eq remote_custom_emoji
      end
    end

    context 'when not given a custom emoji' do
      it 'sets custom_emoji to nil' do
        expect(described_class.create(name: custom_emoji.shortcode, account: account, status: status, custom_emoji: nil).custom_emoji).to be_nil
      end
    end

    context 'when given a disabled custom emoji' do
      it 'sets custom_emoji to nil' do
        expect(described_class.create(name: disabled_custom_emoji.shortcode, account: account, status: status, custom_emoji: disabled_custom_emoji).custom_emoji).to be_nil
      end
    end
  end
end
