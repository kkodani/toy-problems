function firstNonRepeatedCharacter (string) {
  // Write your code here, and
  // return your final answer.
  var repeats = {};
  var uniques = [];
  
  //loop through string
  for(var i=0; i<string.length; i++) {
    var currentChar = string.charAt(i);
    //check if already in repeat
    if(repeats[currentChar] === undefined) {
        var index = uniques.indexOf(currentChar);
        //check if already in uniques
        if(index === -1) {
            //if no add to uniques
            uniques.push(currentChar);
        }
        else {
            // if yes remove from uniques and add to repeats
            repeats[currentChar]=true;
            uniques.splice(index, 1);
        }
    }
  }
  
  if(uniques.length === 0) {
      return "sorry";
  }
  else {
      return uniques.shift();
  }
}