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



assertArraysEqual([1, 2, 3,], [1, 2, 3,]);


