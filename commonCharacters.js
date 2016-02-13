commonCharacters = function(string1, string2){
  var results = "";
  for(var i=0; i<string1.length; i++) {
    var curr = string1[i];
    if(string2.includes(curr) && curr!==" " && !results.includes(curr)) {
      results=results.concat(curr)
    }
  }
  
  return results;
};
