function arrayception (array) {

  var depth = 0;

  var recurse = function(array, currentDepth) {

    if(!Array.isArray(array)) {
      depth = Math.max(depth, currentDepth);
      return;
    }

    for(var i=0; i<array.length; i++) {
      recurse(array[i], currentDepth + 1);
    }
  };

  recurse(array, 0);
  return depth;
}
