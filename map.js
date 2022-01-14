const words = ["ground", "control", "to", "major", "tom"];
const test = ["Jomel", "James", "Jordan", "Justin", "Jalen"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length && firstArray.every((val, index) => val === secondArray[index])) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log('✅ Arrays are equal ✅');
  } else {
    console.log('🛑 Arrays are NOT equal 🛑');
  }
};

const result1 = map(words, word => word[0]);
const result2 = map(test, word => word[2]);
console.log(result1);
console.log(result2);

assertArraysEqual(result1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(result2, [ 'm', 'a', 'r', 's', 'l' ]);