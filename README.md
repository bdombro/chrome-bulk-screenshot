# 📸 chrome-bulk-screenshot 📷

## About

This package will take pdf snapshots of rendered web pages in bulk using Puppeteer (aka headless Chromium).

## Why?

Using the chrome cli over many URLs is way CPU expensive and slow, because you must open a new browser per URL. This app opens and re-uses a single browser instance, thereby limiting to a single CPU AND with less CPU effort.


## Caveats

1. Takes about 2 seconds per snapshot per screen
1. Not quite pixel perfect.


## Requirements

1. Requires Node v7.x or higher

## Installation

```
yarn global add chrome-bulk-screenshot
or
npm install -g chrome-bulk-screenshot
```

## Usage

```
chrome-bulk-screenshot [options]

Options
  --rainbow, -r  Include a rainbow
  --init, -i  Copy demo config here

Examples
  $ chrome-bulk-screenshot --init
  🌈 unicorns 🌈
  $ chrome-bulk-screenshot --config=config.yml
  ...
```

Then check the 'out' folders.


## Contributing

Open up a pull request or email me (see package.json for email)


## Related

1. [headless-bulk-screenshot](https://github.com/rustyy/headless-bulk-screenshot) - Opens a new browser instance per snapshot -- less CPU effecient.


## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright (c) 2017 Brian Dombrowski <bdombro@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.