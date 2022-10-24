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


//assertArraysEqual([1, 2, 3,], [1, 2, 3,]);

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.


// const findKeyByValue = function(showObject, nameOfShow) {
//   for (let keys in showObject)
//     if (showObject[keys] === nameOfShow) {
//       return keys;
//     }
// };

const findKey = function(object, callback) {
  for (let key in object) {
    const value = callback(object[key]);
    if (value) {
      return key;
    }
  }
};


const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(results1)

module.exports = findKey;

