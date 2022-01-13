const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function(string) {
  const letterArr = {};

  // Get rid of any spaces in the string
  string = string.split(" ").join("");

  for (const letters of string) {
    if (letterArr[letters]) {
      letterArr[letters] += 1;
    } else {
      letterArr[letters] = 1;
    }
  }
  console.log(letterArr);
  return letterArr;
};

countLetter('Lighthouse Labs');
countLetter(' JJ J o o O MMM mm m');
countLetter(' Jomel ');
countLetter(' aa a A B bB C cc c A');