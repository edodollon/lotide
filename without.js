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

const without = function(originalArray, itemsToRemove) {
  const newArray = [];

  for (let value of originalArray) {
    if (!(itemsToRemove.includes(value))) {
      newArray.push(value);
    }
  }
  console.log(newArray);
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3, 4, 5, 3, 5], [3, 1]) // => [2, 4, 5, 5]
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]