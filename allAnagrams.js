function allAnagrams (string) {
  var arr = string.split("");
  var results = [];

  var recurse = function(current){
    if(current.length===string.length) {
      if(!results.includes(current)) {
        results.push(current);
      }
    }
    else {
      for(var i=0; i<arr.length; i++){
        var currentChar=arr[i];
        arr.splice(i,1);
        recurse(current+currentChar);
        arr.splice(i,0, currentChar);
      }
    }
  };

  recurse("");

  return results;
}
