
<h1 align="center">
    <img style="max-width: 400px;" src="https://github.com/LasaleFamine/phunctional/blob/master/phunctional.png?raw=true" alt="phunctional"/>
</h1>

[![npm](https://img.shields.io/npm/v/phunctional.svg?style=flat-square)](https://github.com/LasaleFamine/phunctional)
[![Build Status](https://travis-ci.org/LasaleFamine/phunctional.svg?branch=master)](https://travis-ci.org/LasaleFamine/phunctional) [![codecov](https://codecov.io/gh/LasaleFamine/phunctional/badge.svg?branch=master)](https://codecov.io/gh/LasaleFamine/phunctional?branch=master) [![punctional](https://img.shields.io/badge/phunctional--orange.svg?style=flat-square)](https://github.com/LasaleFamine/phunctional)

> &#34;Almost&#34; functional programming (typed for TypeScript) utils methods

## Why

Wrapping all the methods I usually put within a `functional.js` file inside my projects, as node module. BTW this is a nice way to make mistake and learn more about functional programming.

## Install

```
$ yarn add phunctional
```

## Usage

The library can be used both with normal JavaScript and TypeScript.

```js
const {switchcase} = require('phunctional');

const awesomeSwitch = {
	aCondition: 'some value',
	anotherCondition: 'some other value'
};

const res = switchcase(awesomeSwitch)('a default value')('aCondition');
console.log(res);
// => some value

```


## Methods
### switchcase

> Simple `switch` but composable with object literals. It also can run a function.

`Object -> Any -> String`

<details><summary><b>expand</b></summary><p>

- `Object`: object of `cases` to analyze
- `Any`: default case as anything you need
- `String`: `key` to check

</p></details>

##### return *case* | defaultCase

Returns the choosen *case* or the *defaultCase*


### map

> Classic `map` on array but without side effects.

`Function -> Array`

<details><summary><b>expand</b></summary><p>

- `Function`: function to handle the `map`
- `Array`: array of items

</p></details>

##### return [T] | []

Returns an empy array if the array passed is not valid.

### pEach

> `forEach` that returns a Promise and can also handle a delay between iterations.

`(Array, [Number]) -> Function -> Promise`

<details><summary><b>expand</b></summary><p>

- `Array`: array of items to iterate
- `Number`: delay in milliseconds to run each iteration and wait

- `Function`: function to handle the single item

</p></details>

##### return Promise

Returns a `Promise` with an array of the results of every iteration.

## License
MIT © LasaleFamine
