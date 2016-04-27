function evenOccurrence (arr) {
  var itemCount = {};
  for(var i=0; i< arr.length; i++) {
    var current = arr[i];

    if(itemCount[current]) {
        itemCount[current]++;
    }
    else {
      itemCount[current] = 1;
    }
  }

  for(var i=0; i<arr.length; i++) {
    if(itemCount[arr[i]]%2 === 0) {
      return arr[i];
    }
  }
  return null;
}
