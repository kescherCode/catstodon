# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ActivityPub::Activity::EmojiReact do
  let(:sender) { Fabricate(:account) }
  let(:recipient) { Fabricate(:account) }
  let(:status)    { Fabricate(:status, account: recipient) }

  let(:json) do
    {
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: 'foo',
      type: 'EmojiReact',
      content: '👍',
      actor: ActivityPub::TagManager.instance.uri_for(sender),
      object: ActivityPub::TagManager.instance.uri_for(status),
    }.with_indifferent_access
  end

  describe '#perform' do
    context 'with an emoji' do
      subject { described_class.new(json, sender) }

      before do
        subject.perform
      end

      it 'creates a reaction from sender to status' do
        expect(sender.reacted?(status, json['content'])).to be true
      end
    end

    context 'with a custom emoji' do
      subject { described_class.new(json, sender) }

      let(:json) do
        {
          '@context': 'https://www.w3.org/ns/activitystreams',
          id: 'foo',
          type: 'EmojiReact',
          content: +':tinking:',
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
        subject.perform
      end

      it 'creates a reaction from sender to status' do
        expect(sender.reacted?(status, 'tinking', CustomEmoji.find_by(shortcode: 'tinking', domain: sender.domain))).to be true
      end
    end
  end
end
