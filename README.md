# chrome-bulk-screenshot

## About

This package will take pdf snapshots of rendered web pages in bulk using Puppeteer (aka headless Chromium).

## Why?

Using the chrome cli over many URLs is way CPU expensive and slow, because you must open a new browser per URL. This app opens and re-uses a single browser instance, thereby limiting to a single CPU AND with less CPU effort.


## Caveats

1. Takes about 2 seconds per snapshot per screen
1. Not quite pixel perfect.


## Requirements

1. Requires Node v7.x or higher


## Usage

1. Copy and configure the sample yaml to your project root directory.

2. Run this:
```
npm i
node chrome-bulk-screenshot.js
```

Then check the 'out' folders.


## Contributing

Open up a pull request or email me


## Related

1. [headless-bulk-screenshot](https://github.com/rustyy/headless-bulk-screenshot) - Opens a new browser instance per snapshot -- less CPU effecient.