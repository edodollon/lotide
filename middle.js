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

const middle = function(midArray) {
  let newArr = [];
    
  if (midArray.length <= 2) {
    return [];
  } else if (midArray.length % 2 !== 0) {
    newArr.push(midArray[(midArray.length - 1) / 2]);
  } else if (midArray.length % 2 === 0) {
    newArr.push(midArray[Math.floor((midArray.length - 1) / 2)], midArray[midArray.length / 2]);
  }
  
  return newArr;
};

// TEST CASES
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]