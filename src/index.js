/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0; 
  for (var i = 0; i < preferences.length; i++) {
    var a = preferences[i],
    b = preferences[a - 1],
    c = preferences[b - 1];
	if (a===b || b===c || c===a) {
		continue;
	}
	if (c === i + 1) {
      count++;
    }
  }
  return count / 3;
};