const assert = require('chai').assert;
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


describe('#countOnly', () => {
  it('Should return 1 as array contains "Jason" x1', () => {
    const actual = result1["Jason"];
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
  it('Should return undefined as array does not contain "Karima"', () => {
    const actual = result1["Karima"];
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
  it('Should return 2 as array contains "Fang" x2', () => {
    const actual = result1["Fang"];
    const expected = 2;
    assert.strictEqual(actual, expected);
  });
  it('Should return undefined as array does not contain "Agouhanna"', () => {
    const actual = result1["Agouhanna"];
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});