const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('Return object with counts of letters', () => {
    const actual = letterPositions('LightHouse');
    const expected = {
      L: [ 0 ],
      i: [ 1 ],
      g: [ 2 ],
      h: [ 3 ],
      t: [ 4 ],
      H: [ 5 ],
      o: [ 6 ],
      u: [ 7 ],
      s: [ 8 ],
      e: [ 9 ]
    };
    assert.deepEqual(actual, expected);
  });
  it('Return object with counts of letters', () => {
    const actual = letterPositions('Edodollon');
    const expected = {
      E: [ 0 ],
      d: [ 1, 3 ],
      o: [ 2, 4, 7 ],
      l: [ 5, 6 ],
      n: [ 8 ]
    };
    assert.deepEqual(actual, expected);
  });
  it('Return object with counts of letters', () => {
    const actual = letterPositions('AbB CCcc Jomeljomel');
    const expected = {
      A: [ 0 ],
      b: [ 1 ],
      B: [ 2 ],
      C: [ 3, 4 ],
      c: [ 5, 6 ],
      J: [ 7 ],
      o: [ 8, 13 ],
      m: [ 9, 14 ],
      e: [ 10, 15 ],
      l: [ 11, 16 ],
      j: [ 12 ]
    };
    assert.deepEqual(actual, expected);
  });
})



       