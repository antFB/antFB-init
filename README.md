# antFB-init

[![NPM version](https://img.shields.io/npm/v/antd-init.svg?style=flat)](https://npmjs.org/package/antFB-init)

[Ant Fable](https://github.com/antFB/antFB) boilerplate generator.

----

## Feature

- Generate a webpack workflow based boilerplate.
- support ES2015 and less.
- Local development via [dora](https://github.com/dora-js/dora), support proxy, HMR and unit test.
- support custom webpack.config，[examples](./boilerplate/redux/webpack.config.js).
- support IE8.


## Install

```bash
$ npm i antFB-init -g
```

## Usage

Generate boilerplate.

```bash
$ mkdir foo && cd foo
$ antFB-init --ie8

// or with specify type
$ antFB-init --redux
$ antFB-init --mobileWeb
$ antFB-init --nativeApp
```

Start development server.

```bash
$ npm start
```

Build.

```bash
$ npm run build
```

Test.

```bash
$ npm test
```

Lint.

```bash
$ npm run lint
```

nativeApp start.
```bash
$ react-native run-android
//$ react-native run-ios
```
