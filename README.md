# path-browserify-esm [![Build Status](https://travis-ci.org/browserify/path-browserify.png?branch=master)](https://travis-ci.org/browserify/path-browserify)

> The `path` module from Node.js for browsers

- forked from [path-browserify](https://github.com/browserify/path-browserify) , and combined with [@types/path-browserify](https://www.npmjs.com/package/@types/path-browserify)

- converted to ES6 Modules (ESM)

- added new method: setCWD(path: string). The original path-browserify would fail when calling *resolve* in browser, as it calls process.cwd() internally. Now, the CWD can be manually set (default is empty string)