const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  let isEqual = array1.length === array2.length &&
  array1.every((value, index) => value === array2[index]);
  return isEqual;
};


assertEqual("Bootcamp", "Bootcamp");
assertEqual(2,1);



assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true);