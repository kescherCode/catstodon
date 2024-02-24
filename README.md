# Catstodon

## Introduction

This Mastodon fork is based on the [glitch-soc Fork of Mastodon](https://github.com/glitch-soc/mastodon), with changes made to suit [CatCatNya~](https://catcatnya.com).
I intend to contribute some useful differences back to [glitch-soc](https://github.com/glitch-soc/mastodon) and [vanilla Mastodon](https://github.com/mastodon/mastodon).

To install, take a look at [glitch-soc.github.io/docs/](https://glitch-soc.github.io/docs/). The instructions and features are the same, except for the differences outlined below.

Contributing guidelines are available [here](CONTRIBUTING.md).

Note: Use the main branch only for forks. `develop` branch may, at times,
be force-pushed to (mostly for undoing cherry-picking of vanilla commits when upstream adopts them).
I highly suggest only ever running the `main` branch in production, as is done for [CatCatNya~](https://catcatnya.com)!
I also highly suggest not rebasing on this if you are maintaining a fork,
instead, use merge (fast-forward, if possible, with merge commit otherwise).

## Differences

- Some files are adjusted specifically for the CatCatNya~ instance. Specifically, these:
  - sounds/boop.mp3
  - sounds/boop.ogg
    <br>You might want to revert these to the upstream files (or your own versions!) if you decide to use this fork for your own instance.
- The rate limits for authenticated users have been relaxed a bit.
- The API endpoint `/api/v1/custom_emojis` is no longer affected by AUTHORIZED_FETCH, allowing anyone to copy custom emojis.
- Allow higher resolution images. (4096x4096 instead of the previous limit of 3840x2160)
- Allow posting polls with only one poll option (if `MIN_POLL_OPTIONS` is set to 1 on your instance).
- Added oatstodon flavour (taken from [types.pl fork](https://github.com/ralsei/types.pl), by [@oat@hellsite.site](https://hellsite.site/@oat)), with slight adjustments since.
- Emoji reactions on statuses (with both Unicode and custom emojis, same as for announcements), a feature originally developed for [Nyastodon](https://git.bsd.gay/fef/nyastodon).
  Ended up as a Catstodon-maintained patch after its initial two Pull Requests to glitch-soc, but was handed over to [Essem's fork, Chuckya](https://github.com/TheEssem/mastodon) and is now pending [its fourth attempt of merging into glitch-soc](https://github.com/glitch-soc/mastodon/pull/2462).
- Lifts the "only federate local favourites" restriction on favourites/likes and emoji reactions.
- Cherry-picks the [activity filter branch](https://github.com/chikorita157/mastodon-sakura/tree/newmain-tmp3-noellabo-filtering) from [Sakurajima Mastodon](https://github.com/chikorita157/mastodon-sakura).

## Previous differences now merged into glitch-soc

- Fixed incorrect upload size limit display when adding new a new custom emoji. ([Pull request](https://github.com/glitch-soc/mastodon/pull/1763))
- Everything merged into vanilla Mastodon

## Previous differences now merged into vanilla Mastodon

- The period of retention of IP addresses and sessions was made configurable. ([Pull request](https://github.com/mastodon/mastodon/pull/18757))
