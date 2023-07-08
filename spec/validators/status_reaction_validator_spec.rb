# frozen_string_literal: true

require 'rails_helper'

describe StatusReactionValidator do
  let(:status) { Fabricate(:status) }
  let(:account) { Fabricate(:account) }
  let(:remote_account) { Fabricate(:account, domain: 'example.com') }

  describe '#validate' do
    it 'adds error when not a valid unicode emoji' do
      reaction = status.reactions.build(name: 'F', account: account)
      subject.validate(reaction)
      expect(reaction.errors).to_not be_empty
    end

    it 'does not add error when non-unicode emoji is a custom emoji' do
      custom_emoji = Fabricate(:custom_emoji)
      reaction = status.reactions.build(name: custom_emoji.shortcode, custom_emoji: custom_emoji, account: account)
      subject.validate(reaction)
      expect(reaction.errors).to be_empty
    end

    it 'adds error when local account already reacted' do
      status.reactions.create!(name: '👍', account: account)

      reaction = status.reactions.build(name: '😘', account: account)
      subject.validate(reaction)
      expect(reaction.errors).to_not be_empty
    end

    it 'does not add error when remote account already reacted' do
      status.reactions.create!(name: '👍', account: remote_account)

      reaction = status.reactions.build(name: '😘', account: remote_account)
      subject.validate(reaction)
      expect(reaction.errors).to be_empty
    end
  end
end
