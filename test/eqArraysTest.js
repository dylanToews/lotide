const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');

assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true);
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]), false);