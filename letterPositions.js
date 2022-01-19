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
  // console.log(results);
  return results;
};
   
module.exports = letterPositions;