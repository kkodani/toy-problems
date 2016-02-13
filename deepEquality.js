deepEquals = function(a, b){
  var result = true;

  //check for empty objs and size mismatches
  if(Object.keys(b).length !== Object.keys(a).length) {
      return false;
  }

  for(var k in a) {
      //objects and arrays
      if(typeof a[k] === "object" && typeof b[k] === "object") {
          result = result && deepEquals(a[k], b[k]);
      }
      //numbers, strings, booleans
      else if(a[k] === b[k]) {
          result = result && true;
      }
      //no match
      else {
          return false;
      }
  }
  
  return result;
};  
