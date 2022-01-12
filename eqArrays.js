const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length && firstArray.every((val, index) => val === secondArray[index])) {
    return true;
  } else {
    return false;
  }
};

// TEST CASES
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// (eqArrays([1, 2, 3], [1, 2, 3])); // => true
// (eqArrays([1, 2, 3], [3, 2, 1])); // => falsconsole.loge

// (eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// (eqArrays(["1", "2", "3"], ["1", "2", 3])); // => falseconsole.log