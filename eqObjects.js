const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length && firstArray.every((val, index) => val === secondArray[index])) {
    return true;
  } else {
    return false;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let result;

  if (Object.keys(object1).length && Object.keys(object2).length) return true;

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {
    if (key in object2) {
      if (object1[key] === Object(object1[key])) {
        result = eqObjects(object1[key], object2[key]);
      } else if (Array.isArray(object2[key])) {
        result = eqArrays(object2[key], object1[key]);
      } else {
        result = (object1[key] === object2[key]);
      }
    } else {
      result = false;
    }
    if (!result) break;
  }

  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
// assertEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
// assertEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
// assertEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
// assertEqual(cd, cd2);