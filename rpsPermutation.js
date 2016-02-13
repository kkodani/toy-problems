function rockPaperPermutation (roundCount) {

  var result = [];
  var recurse = function(currentSequence, depth){
      if(depth === 0) {
          return;
      }
      if(depth === 1) {
          result.push(currentSequence+"r");
          result.push(currentSequence+"p");
          result.push(currentSequence+"s");
      }
      else {
          recurse(currentSequence+"r", depth-1);
          recurse(currentSequence+"p", depth-1);
          recurse(currentSequence+"s", depth-1);
      }
  }
  recurse("", roundCount);
  return result;
}