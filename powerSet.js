function powerSet (string) {

  string = alphabetize(string);
  string = uniq(string);
  
  var results = [];
  
  var recurse = function(str) {
    if(str === "") {
        results.push("");
    }
    else {
        recurse(str.slice(1));
        var currentLength = results.length;
        for(var i=0; i<currentLength; i++) {
            results.push(str[0]+results[i]);
        }
    }
  }
  
  recurse(string);
  return results.sort();
}

//sort alphabetically
var alphabetize = function(string) {
    var arr = string.split("");
    arr.sort();
    return arr.join("");
};

//remove duplicates
var uniq = function(string) {
    var result = "";
    for(var i=0; i<string.length; i++) {
        if(!result.includes(string[i])) {
            result+=string[i];
        }
    }
    return result;
};