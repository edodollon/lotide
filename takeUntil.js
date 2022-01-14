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

const takeUntil = function(array, callback) {
  const resultArr = [];

  for (const e of array) {
    
    if (callback(e)) {
      return resultArr;
    }
    
    resultArr.push(e);
  }

  return resultArr;
};

// TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);