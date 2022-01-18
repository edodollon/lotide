const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('Return empty array if array length passed in is < 2', () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it('Return empty array if array length passed in is < 2', () => {
    const actual = middle([1, 2]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it('Return middle number if array is odd', () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });
  it('Return middle number if array is odd', () => {
    const actual = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    assert.deepEqual(actual, expected);
  });
  it('Return 2 middle numbers if array is even', () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });
  it('Return 2 middle numbers if array is even', () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });
});

// TEST CASES
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]