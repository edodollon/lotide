const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

describe('#eqObjects', () => {
  it('Both arrays are equal', () => {
    const actual = eqObjects(ab, ba); // => true
    const expected = true;
    assert.deepEqual(actual, expected);
  });
  it('Both arrays are equal', () => {
    const actual = eqObjects(cd, dc); // => true
    const expected = true;
    assert.deepEqual(actual, expected);
  });
})