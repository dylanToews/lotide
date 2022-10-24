const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("should return two middle values when given an even array length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return one middle value when given an odd array length", () => {
    assert.deepEqual(middle(['dog', 'cat', 'sheep', 'pig', 'T-rex']), ['sheep']);
  })
});


// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle(['dog', 'cat', 'sheep', 'pig', 'T-rex']), ['dog']);
