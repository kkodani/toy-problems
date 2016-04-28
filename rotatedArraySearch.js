function rotatedArraySearch (rotated, target) {
    var pivot = findPivot(rotated, 0, rotated.length-1);

    var left = rotated.slice(0, pivot+1)
    var right = rotated.slice(pivot+1, rotated.length)
    console.log(pivot)

    if (rotated[pivot] === target) {
        return pivot;
    }
    if (rotated[0] <= target) {
        return binarySearch(left, target);
    }
    else {
        var val = binarySearch(right, target);
        if(val === -1) {
            return val;
        }
        return val+pivot+1;
    }
}


var findPivot = function(arr, start, end) {
    if(end < start) {
        return -1;
    }

    if(end === start) {
        return start;
    }

    var mid = Math.floor((start + end)/2);

    if (mid < end && arr[mid] > arr[mid + 1]) {
        return mid;
    }
    if (mid > start && arr[mid] < arr[mid - 1]) {
        return (mid-1);
    }
    if (arr[start] >= arr[mid]) {
        return findPivot(arr, start, mid-1);
    }

    return findPivot(arr, mid + 1, end);
};

function binarySearch (array, target) {
  var maxIndex = array.length-1;
  var minIndex = 0;

  while(minIndex <= maxIndex) {
    var midIndex = Math.floor((maxIndex+minIndex)/2);
    var midVal = array[midIndex];

    if (midVal === target) {
      return midIndex;
    }

    if (midVal > target) {
      maxIndex = midIndex-1;
    }

    if (midVal < target) {
      minIndex = midIndex+1;
    }
  }
  return -1;
}
