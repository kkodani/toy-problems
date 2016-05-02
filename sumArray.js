function sumArray (array) {

  var sum;

  for(var i=0; i<array.length; i++) {
    var currentSum = 0;
    for(var j=i; j<array.length; j++) {
        currentSum += array[j];
        if(sum === undefined || currentSum > sum) {
            sum = currentSum;
        }
    }
  }

  return sum;
}
