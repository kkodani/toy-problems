var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    //YOUR CODE HERE
    var bucket = storage[index];
    for(var i=0; i<bucket.length; i++) {
      if(bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }
    storage[index].push({key: key, value: value});
  };

  table.retrieve = function(key){
    //YOUR CODE HERE
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];
    for(var i=0; i<bucket.length; i++) {
      if(bucket[i].key === key) {
        return bucket[i].value;
      }
    }
    return undefined;
  };

  table.remove = function(key){
    //YOUR CODE HERE
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];
    for(var i=0; i<bucket.length; i++) {
      if(bucket[i].key === key) {
        bucket.splice(i,1);
      }
    }
  }
  return table;
};


var getIndexBelowMaxForKey = function(str, max){
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash<<5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};
