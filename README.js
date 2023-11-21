# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Dylan as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dylanpalin/lotide`

**Require it:**

`const _ = require('@dylanpalin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes in two arrays and console.log an appropriate message to the console.
* `assertEqual`: takes in two primitive values and console.log an appropriate message to the console.
* `assertObjectsEqual`: takes in two objects and console.log an appropriate message to the console.
* `countLetters`: takes in a string and returns an object with the count of each letter.
* `countOnly`: takes in an array and an object and returns an object with the count of each item in the array that is specified in the object.
* `eqArrays`: takes in two arrays and returns true if they are equal.
* `eqObjects`: takes in two objects and returns true if they are equal.
* `findKey`: takes in an object and a callback and returns the first key for which the callback returns a truthy value.
* `findKeyByValue`: takes in an object and a value and returns the first key that contains the given value.
* `flatten`: takes in an array of arrays and returns a single array with all the elements of the original arrays.
* `head`: takes in an array and returns the first element.
* `letterPositions`: takes in a string and returns an object with the index of each letter.
* `middle`: takes in an array and returns the middle element(s).
* `tail`: takes in an array and returns the array without the first element.
* `takeUntil`: takes in an array and a callback and returns a slice of the array until the callback returns a truthy value.
* `without`: takes in an array and an array of items to remove and returns a new array without the items to remove.