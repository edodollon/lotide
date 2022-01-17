const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log((eqArrays([1, 2, 3], [1, 2, 3]))); // => true
console.log((eqArrays([1, 2, 3], [3, 2, 1]))); // => falsconsole.loge

console.log((eqArrays(["1", "2", "3"], ["1", "2", "3"]))); // => true
console.log((eqArrays(["1", "2", "3"], ["1", "2", 3]))); // => falseconsole.log