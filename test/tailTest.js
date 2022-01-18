const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it ('Returns tail', () => {
    const actual = tail(["Yo Yo", "Lighthouse", "Labs"]);
    const expected = [ 'Lighthouse', 'Labs' ];
    assert.deepEqual(actual, expected);    
  })
  it ('Original array is not changed', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3);    
  })
});