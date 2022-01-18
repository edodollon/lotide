const eqArrays = require('../eqArrays');
const middle = require('../middle');

// TEST CASES
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]