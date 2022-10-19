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



const middle = function(array) {
  let answer = [];
  let middleIndex = 0;

  if (array.length % 2 !== 0 && array.length !== 1) {
    middleIndex = (array.length + 1) / 2;
    answer.push(array[middleIndex - 1]);
  } else if (
    array.length % 2 === 0 && array.length !== 2) {
    middleIndex = array.length / 2;
    answer.push(array[middleIndex - 1]);
    answer.push(array[middleIndex]);
  }
  return answer;
};
  



assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(['dog', 'cat', 'sheep', 'pig', 'T-rex']), ['dog']);

