# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('dylantoews@Deannes-Air/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head = returns the first element in an array
* tail = returns all elements except the first element in an array
* middle = returns the middle element(s) in an array
* assertArraysEqual = tests if arrays are equal
* assertEqual = tests if elements are equal
* assertObjectsEqual = tests if objects are equal
* countLetters = counts letters in a string
* countOnly = counts how many times a specific string is repeated in an array
* eqArrays = compares arrays
* eqObjects = compares objects
* findKey = finds keys 
* findKeyByValue = finds keys by values
* letterPositions = finds indexes of letters in a string
* map = similar to .map
* takeUntil = returns string until certain element is encountered 
* without = returns array without specified element 