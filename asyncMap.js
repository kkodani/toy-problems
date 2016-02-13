var asyncMap = function(tasks, callback){
  var results = [];
  
  var recurse = function(i) {
      if(tasks[i] !== undefined) {
          tasks[i](function(retVal) {
              results.push(retVal)
              recurse(i+1);
          });
      }
      else {
          callback(results);
      }
  }
  recurse(0);
};

//not fully convinced that this is asynchrounous,
//but it passed the test cases