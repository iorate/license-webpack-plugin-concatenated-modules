# license-webpack-plugin-concatenated-esm

## Problem

license-webpack-plugin does not extract licenses of ES modules included in module concatenation (typically, in production mode).

## Reproduction

Clone this repository, and run:

```sh
npm i
npx webpack
```

The license of `hello-esm`, which is an ES module, will not be emitted to `dist/main.licenses.txt`.

## Reason

In recent versions of webpack 5, ES modules in concatenated modules have identifiers of form `javascript/esm|<path>`. license-webpack-plugin does not handle identifiers of this form properly (ref: [getActualFilename](https://github.com/xz64/license-webpack-plugin/blob/185efbc9f3a11710bb910453cba3c8b7b9385405/src/WebpackModuleFileIterator.ts#L36)).

## Workaround

Patching license-webpack-plugin to make `getActualFilename` return `filename.replace(/^javascript\/esm\|/, '')` instead of `filename` would be a workaround, but I'm not sure if it is a good solution.
