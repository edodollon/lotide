const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

// Exports object using Property Value shorthand
module.exports = {
  assertArraysEqual,
  assertEqual,


  head,
  tail,
  middle
}