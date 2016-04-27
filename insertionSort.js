function insertionSort (array) {
  var sorted = [];
  for(var i=0; i<array.length; i++) {

    var inserted = false;
    var len = sorted.length;

    for(var j=0; j<len; j++) {
        if(array[i] < sorted[j] && !inserted) {
            sorted.splice(j, 0, array[i]);
            inserted = true;
        }
    }

    if(!inserted) {
        sorted.push(array[i]);
    }
  }

  return sorted;
}
