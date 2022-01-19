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

module.exports = middle;