
<h1 align="center">
    <img style="max-width: 400px;" src="https://github.com/LasaleFamine/phunctional/blob/master/phunctional.png?raw=true" alt="phunctional"/>
</h1>

[![Build Status](https://travis-ci.org/LasaleFamine/phunctional.svg?branch=master)](https://travis-ci.org/LasaleFamine/phunctional) [![codecov](https://codecov.io/gh/LasaleFamine/phunctional/badge.svg?branch=master)](https://codecov.io/gh/LasaleFamine/phunctional?branch=master)

> &#34;Almost&#34; functional programming utils methods

## Why

Wrapping all the methods I usually put within a `functional.js` file inside my projects, as node module. BTW this is a nice way to make mistake and learn more about functional programming.

## Install

```
$ yarn add phunctional
```

## Usage

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

`Object -> Any -> String`

<details><summary><b>expand</b></summary><p>

- `Object`: object of `cases` to analyze
- `Any`: default case as anything you need
- `String`: `key` to check

</p></details>

##### return *case* | defaultCase

Simple `switch` but composable with object literals. It could also run a function.


### map


`Function -> Array`

<details><summary><b>expand</b></summary><p>

- `Function`: function to handle the `map`
- `Array`: array of items

</p></details>

##### return [T] | []

Classic `map` on array but without side effects. Return an empy array if the array passed is not valid.
