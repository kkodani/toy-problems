function bubbleSort (input) {
  var result = input.slice();
  var stillSorting = true;
  
  while(stillSorting) {
      stillSorting = false;
      for(var i=0; i< input.length-1; i++){
          if(result[i] > result[i+1]) {
              var temp = result[i+1];
              result[i+1] = result[i];
              result[i] = temp;
              stillSorting = true;
          }
      }
  }
  
  return result;
}
