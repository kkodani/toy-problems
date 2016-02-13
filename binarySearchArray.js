function binarySearch (array, target) {
  var recurse = function(start, end, mod) {
      var middle = Math.floor((end-start)/2) + start;
      
      if(target===array[middle]) {
          return middle;
      }
      
      else if(array[middle]===array[0] || array[middle]===array[array.length-1]) {
          return -1;
      }
      
      else if(target < array[middle]) {
          return recurse(start, middle);
      }
      
      else if(target > array[middle]) {
          return recurse(middle+1, end);
      }
  };
  
  return recurse(0, array.length-1);
}