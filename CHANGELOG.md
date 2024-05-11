# Changelog

All changes to Catstodon that aren't Mastodon or glitch-soc Mastodon changes will be documented here.

## [v4.3.0-alpha.3+glitch+cat+1.2.0] - 2024-05-11

- Glitch-soc changes since and including 62bc36416f2d2defc77a501226afd0679b6ca252
- Ruby version 3.3.1. Update your rbenv!
- Mastodon/Catstodon now requires that these variables are set:

  - ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY
  - ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT
  - ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY

  After `bundle install`, run `bin/rails db:encryption:init` to generate values and then assign the environment variable, for example in your `.env.production`.

## [v4.3.0-alpha.3+glitch+cat+1.1.3] - 2024-04-26

- Glitch-soc changes, most notably fixing the display of follow request notifications.

## [v4.3.0-alpha.3+glitch+cat+1.1.2] - 2024-04-11

- Glitch-soc changes, most notably notifications about severed connections.
  - Wow, my Python code to do the same manually was finally rendered obsolete!

## [v4.3.0-alpha.3+glitch+cat+1.0.9] - 2024-03-03

- Glitch-soc changes again (this time, among other stuff, the search bar icon position is fixed)

## [v4.3.0-alpha.3+glitch+cat+1.0.8] - 2024-02-29

- Update translations from glitch-soc
- glitch-soc now uses openURL function from upstream

## [v4.3.0-alpha.3+glitch+cat+1.0.7] - 2024-02-28

- Merged glitch-soc changes (incl. comments on admin/instances page)

## [v4.3.0-alpha.3+glitch+cat+1.0.6] - 2024-02-25

- Applied changes to emoji reactions PR on glitch-soc
