const assertArraysEqual = function(array1, array2) {

  let result;
  const failed = `🛑🛑🛑 Assertation Failed: ${array1} !== ${array2}`;
  const passed = `✅✅✅ Assertation Passed: ${array1} === ${array2}`;
  
  result = eqArrays(array1, array2);
  console.log(result ? passed : failed);
};


const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    //let emptyArray = []
    //emptyArray.push(i)
    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i);

  }
  return results;
};


console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);

//assertArraysEqual(letterPositions("hello"),{h: [0], e: [1], l: [2, 3], o: [4]})

module.exports = letterPositions;