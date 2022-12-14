const assertObjectsEqual = function(o1, o2) {
  const inspect = require('util').inspect
  
  let result;
  const failed = `🛑🛑🛑 Assertation Failed: ${inspect(o1)} !== ${inspect(o2)}`;
  const passed = `✅✅✅ Assertation Passed: ${inspect(o1)} === ${inspect(o2)}`;
  
  result = eqObjects(o1, o2);
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





const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let objectKeys of Object.keys(object1)) {
    if (Array.isArray(object1[objectKeys])) {
      return eqArrays(object1[objectKeys], object2[objectKeys]);
    }
    else if (object1[objectKeys] !== object2[objectKeys]) {
      return false;
    }
  }
  return true;
};

//const ab = { a: "1", b: "2", };
//const ba = { b: "2", a: "1" };



//const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc); // => true

console.log(eqObjects(cd, dc))

module.exports = assertObjectsEqual;