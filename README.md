# Catstodon

## Introduction

This Mastodon fork is based on the [glitch-soc Fork of Mastodon](https://github.com/glitch-soc/mastodon).

- To install, take a look at [glitch-soc.github.io/docs/](https://glitch-soc.github.io/docs/). The instructions and features are the same, except for the differences outlined below.
- Contributing guidelines are available [here](CONTRIBUTING.md).

## Differences

- Some files are adjusted specifically for the CatCatNya~ instance. Specifically, these:
  - sounds/boop.mp3
  - sounds/boop.ogg
  
  You might want to revert these to the upstream files (or your own versions!) if you decide to use this fork for your own instance.
- The web frontend emoji picker is a blobcat instead of the joy emoji.
- Editing posts is enabled in the web frontend (thanks, meave [for the hint](https://toot.site/@meave/108515761669028663)).
- The period of retention of IP addresses was made configurable.
- The period of retention of sessions was made configurable.
- The rate limits for authenticated users have been relaxed a bit.
- The API endpoint `/api/v1/custom_emojis` is no longer affected by AUTHORIZED_FETCH, allowing anyone to copy custom emojis.
