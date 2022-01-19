const findKeyByValue = function(objectGiven, value) {

  for (const genres in objectGiven) {
    if (objectGiven[genres] === value) {
      return `${genres}`;
    }
  }
};

module.exports = findKeyByValue;