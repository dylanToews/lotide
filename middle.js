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

module.exports = middle



