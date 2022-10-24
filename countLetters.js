const assertArraysEqual = function(array1, array2) {

  let result;
  const failed = `🛑🛑🛑 Assertation Failed: ${array1} !== ${array2}`;
  const passed = `✅✅✅ Assertation Passed: ${array1} === ${array2}`;
  
  result = eqArrays(array1, array2);
  console.log(result ? passed : failed);
};

const countLetters = function(input) {
  const counterObject = {};
  for (let letters of input) {
    if (counterObject[letters]) {
      counterObject[letters] += 1;
    } else {
      counterObject[letters] = 1;
    }
  } return counterObject;
};

console.log(countLetters("ABCDDD"));

//assertEqual(countLetters("ABCA"), {A: 2, B: 1, C: 1})

module.exports = countLetters
