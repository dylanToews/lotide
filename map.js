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
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  }
};


// assertArraysEqual([1, 2, 3,], [1, 2, 3,]);



const words = ["to", "infinity", "and", "beyond"];

const map = function(array, callback) {
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, firstLetter => firstLetter[0]);

const results2 = map(words, fullWord => fullWord);

const results3 = map(words, stringLength => stringLength.length);

//console.log(results3);  

assertArraysEqual(results1, ['t', 'i', 'a', 'b']);

assertArraysEqual(results2, [ 'to', 'infinity', 'and', 'beyond' ]);

assertArraysEqual(results3, [ 2, 8, 3, 6 ]);


module.exports = map;