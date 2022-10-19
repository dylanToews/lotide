const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
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

assertEqual(countLetters("ABCA"), {A: 2, B: 1, C: 1})
