# Catstodon
## Introduction
This Mastodon fork is based on the [glitch-soc Fork of Mastodon](https://github.com/glitch-soc/mastodon).
I intend to contribute some useful differences back to [glitch-soc](https://github.com/glitch-soc/mastodon) and [vanilla Mastodon](https://github.com/mastodon/mastodon).

To install, take a look at [glitch-soc.github.io/docs/](https://glitch-soc.github.io/docs/). The instructions and features are the same, except for the differences outlined below.

Contributing guidelines are available [here](CONTRIBUTING.md).

## Differences
- Some files are adjusted specifically for the CatCatNya~ instance. Specifically, these:
  - sounds/boop.mp3
  - sounds/boop.ogg
<br>You might want to revert these to the upstream files (or your own versions!) if you decide to use this fork for your own instance.
- The web frontend emoji picker is a blobcat instead of the joy emoji.
- Editing posts is enabled in the web frontend (thanks, meave, [for the hint](https://toot.site/@meave/108515761669028663)).
- The rate limits for authenticated users have been relaxed a bit.
- The API endpoint `/api/v1/custom_emojis` is no longer affected by AUTHORIZED_FETCH, allowing anyone to copy custom emojis.
- Allow higher resolution images. (4096x4096 instead of the previous limit of 1920x1080)

## Previous differences now merged into glitch-soc
- Fixed incorrect upload size limit display when adding new a new custom emoji. ([Pull request](https://github.com/glitch-soc/mastodon/pull/1763)) 

## Previous differences now merged into vanilla Mastodon
- The period of retention of IP addresses and sessions was made configurable. ([Pull request](https://github.com/mastodon/mastodon/pull/18757))  
