function binarySearch (array, target) {
  var index = -1;

  var recurse = function(start, end) {
    var mid = Math.floor((end - start) / 2) + start;

    if(start >= end) {
      return;
    }

    else if(array[mid] === target) {
      index = mid;
      return;
    }

    else if(array[mid] > target) {
      recurse(start, mid);
    }

    else {
      recurse(mid + 1, end);
    }
  }

  recurse(0, array.length);
  return index;
}
