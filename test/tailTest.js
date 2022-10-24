const assert = require('chai').assert;
const tail = (require('../tail'))

describe('#tail', () => {
  it('should return two, three for [one, two, three]', () => {
    assert.deepEqual(tail(words), ['two', 'three'])
  })
  it('should return empty string for an array with a length of 1 or less', () => {
    assert.deepEqual(tail(["one"]), [])
  })
})



const words = ["one", "two", "three"];
