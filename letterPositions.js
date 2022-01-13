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

const letterPositions = function(string) {
  const results = {};

  // Get rid of any spaces in the string
  string = string.split(" ").join("");

  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }
  console.log(results);
  return results;
};

letterPositions('LightHouse')
letterPositions('Edodollon')
letterPositions('AbB CCcc Jomeljomel')
// assertArraysEqual(letterPositions("hello").e, [1]);