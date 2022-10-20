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


