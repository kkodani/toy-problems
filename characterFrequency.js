function characterFrequency (string) {

  var charCount = {};
  var results = [];

  for(var i=0; i<string.length; i++) {
      var current = string[i];
      charCount[current] = charCount[current] + 1 || 1;
  }

  for(var k in charCount) {
      results.push([k, charCount[k]]);
  }

  results.sort(function(a, b) {
      if(a[1] === b[1]) {
          return a[0].charCodeAt(0) - b[0].charCodeAt(0);
      }
      return b[1] - a[1];
  });

  return results;
}
