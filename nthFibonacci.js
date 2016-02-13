nthFibonacci = function(n) {  
  if(n===0){
      return 0;
  }
  if(n===1){
      return 1;
  }
  var result=1;
  var prev1=1;
  var prev2=0;
  for (var i=1; i<n; i++){
      result=prev1+prev2;
      prev2=prev1;
      prev1=result;
  }
  
  return result;
};