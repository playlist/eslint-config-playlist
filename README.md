# eslint-config-playlist [![Build Status](https://travis-ci.org/playlist/eslint-config-playlist.svg?branch=master)](https://travis-ci.org/playlist/eslint-config-playlist) [![npm module](https://img.shields.io/npm/v/eslint-config-playlist.svg)](https://www.npmjs.com/package/playlist-js)

Shared `eslint` configuration for Playlist projects.

## Usage

Create an `.eslintrc` file in your project and include this package in the `extends`:

```json
{
  "extends": "eslint-config-playlist"
}
```

For project-specific configurations, use the following format:

```json
{
  "extends": "eslint-config-playlist/lib/react"
}
```

## License

See `LICENSE`.
