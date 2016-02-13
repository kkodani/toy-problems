function mergeSort(arr){
  if(arr.length === 1) {
      return arr;
  }
  else {
      var mid = Math.floor(arr.length/2)
      var leftSubArray = arr.slice(0, mid);
      var rightSubArray = arr.slice(mid, arr.length);
      return merge(mergeSort(leftSubArray), mergeSort(rightSubArray));
  }
}

var merge = function(left, right) {
    var sortedArr = [];
    var combinedLength = left.length+right.length;
    
    var l = 0;
    var r = 0;
    
    for(var i=0; i<combinedLength; i++) {
        if(left[l]!==undefined && left[l]<right[r] || right[r]===undefined) {
            sortedArr[i] = left[l];
            l++;
        }
        else {
            sortedArr[i] = right[r];
            r++;
        }
    }
    return sortedArr;
};