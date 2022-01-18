const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
assertArraysEqual([1, 2, 3], [1, 3, 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, '3']); // => should FAIL