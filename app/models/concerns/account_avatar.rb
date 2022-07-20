# frozen_string_literal: true

module AccountAvatar
  extend ActiveSupport::Concern

  IMAGE_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].freeze
  LOCAL_LIMIT = (ENV['MAX_AVATAR_SIZE'] || 2.megabytes).to_i
  LIMIT       = [LOCAL_LIMIT, (ENV['MAX_REMOTE_AVATAR_SIZE'] || 2.megabytes).to_i].max

  class_methods do
    def avatar_styles(file)
      styles = { original: { geometry: '400x400#', file_geometry_parser: FastGeometryParser } }
      styles[:static] = { geometry: '400x400#', format: 'png', convert_options: '-coalesce', file_geometry_parser: FastGeometryParser } if file.content_type == 'image/gif'
      styles
    end

    private :avatar_styles
  end

  included do
    # Avatar upload
    has_attached_file :avatar, styles: ->(f) { avatar_styles(f) }, convert_options: { all: '-strip' }, processors: [:lazy_thumbnail]
    validates_attachment_content_type :avatar, content_type: IMAGE_MIME_TYPES
    validates_attachment_size :avatar, less_than: LIMIT, unless: :local?
    validates_attachment_size :avatar, less_than: LOCAL_LIMIT, if: :local?
    remotable_attachment :avatar, LIMIT, suppress_errors: false
  end

  def avatar_original_url
    avatar.url(:original)
  end

  def avatar_static_url
    avatar_content_type == 'image/gif' ? avatar.url(:static) : avatar_original_url
  end
end
