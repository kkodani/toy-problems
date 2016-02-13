function largestProductOfThree (array) {

  var largest;
  var secondLargest;
  var thirdLargest;
  
  var largestNeg;
  var secondLargestNeg;
  
  for(var i=0; i< array.length; i++) {
      //positives
    if(array[i]>largest || largest===undefined) {
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = array[i];
    }
    else if(array[i]>secondLargest || secondLargest===undefined) {
        thirdLargest = secondLargest;
        secondLargest = array[i];
    }
    else if(array[i]>thirdLargest || thirdLargest===undefined) {
        thirdLargest = array[i];
    }
    
    //negatives
    if(array[i]<largestNeg || largestNeg===undefined) {
        secondLargestNeg = largestNeg;
        largestNeg = array[i];
    }
    else if(array[i]<secondLargestNeg || secondLargestNeg===undefined) {
        secondLargestNeg = array[i];
    }
  }
  
  var positivesOnly = largest*secondLargest*thirdLargest;
  var twoNegatives = largest*largestNeg*secondLargestNeg;
  
  if(positivesOnly>twoNegatives) {
      return positivesOnly;
  }
  else {
      return twoNegatives;
  }
}
