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

module.exports = eqObjects;