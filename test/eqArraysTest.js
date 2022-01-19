const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('Return true as [1, 2, 3], [1, 2, 3] are equal', () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.deepEqual(actual ,expected);
  });
  it('Return false as [1, 2, 3], [3, 2, 1] are not equal', () => {
    const actual = eqArrays([1, 2, 3], [3, 2, 1]);
    const expected = false;
    assert.deepEqual(actual ,expected);
  });
});