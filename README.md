# path-browserify-esm [![Build Status](https://travis-ci.org/browserify/path-browserify.png?branch=master)](https://travis-ci.org/browserify/path-browserify)

> The `path` module from Node.js for browsers

- forked from [path-browserify](https://github.com/browserify/path-browserify) , and combined with [@types/path-browserify](https://www.npmjs.com/package/@types/path-browserify)

- converted to ES6 Modules (ESM)

- added new method: setCWD(path: string). The original path-browserify would fail when calling *resolve* in browser, as it calls process.cwd() internally. Now, the CWD can be manually set (default is empty string)


/
path-browserify-esm
/
index.esm.js

## Setup

#### NPM Install
```sh
	npm install path-browserify-esm
```

#### CDN Install

Via jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/path-browserify-esm/index.esm.js" type="module"></script>
```

```html
    <script type="module">
        import path from 'https://cdn.jsdelivr.net/npm/path-browserify-esm/index.esm.js';
        console.log(path.join('asd','zxc','../qwe/rty')); //asd/qwe/rty
        path.setCWD('http://192.168.1.1')
        console.log(path.resolve('asd','zxc','../qwe/rty')); //http:/192.168.1.1/asd/qwe/rty
    </script>
``````