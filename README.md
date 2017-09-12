# plain-babel
This exercise is to understand how to use plain babel and configure it.

## Objective
The objective of this repo is to use plain babel in order to learn how static transpiling and runtime polyfill works.

## Related links
* https://babeljs.io/
* https://babeljs.io/docs/usage/polyfill

## Get started
Feel free to play with `es6.js` and add some more [ES6 syntax](https://babeljs.io/learn-es2015/). Assuming you already run `yarn install`, we can now transpile it by running `yarn transpile`. This command will generate `transpiled-es5.js`. Now you can run the final ES5 code with `yarn start`.

Notice that `es6.js` uses Promise, and since babel transpiling is static, you need to have a polyfill at runtime that provide the Promise API.