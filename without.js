// go through two arrays
// merge the arrays
// don't include duplicates
// if any of the elements inside the arrays match don't include them


const without = function(source, itemsToRemove) {
  let longest = 0;

  if (source.length >= itemsToRemove.length) {
    longest = source.length;
  } else if (source.length < itemsToRemove.length) {
    longest = itemsToRemove.length;
  }

  let newArray = [];

  for (let i = 0; i < longest; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
    }
  }console.log(newArray);
};
  


without([1, 2, 3], [1, 5]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]










const assertArraysEqual = function(array1, array2) {

  let result = '';
  const failed = `🛑🛑🛑 Assertation Failed: ${array1} !== ${array2}`;
  const passed = `✅✅✅ Assertation Passed: ${array1} === ${array2}`;
  
  if (array1.length !== array2.length) {
    result = failed;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = failed;
      } else {
        result = passed;
      }
    }
  } console.log(result);
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



// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

