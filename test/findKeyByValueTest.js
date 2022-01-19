const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  foreign: "Kung Fu Hustle"
};

describe('#findKeyByValue', () => {
  it('Return genre "drama" for "The Wire"', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";
    assert.strictEqual(actual, expected);
  });
  it('Return undefined for "That \'70s Show"', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
  it('Return genre "sci_fi" for "The Expanse"', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "The Expanse");
    const expected = "sci_fi"
    assert.strictEqual(actual, expected);
  });
})




