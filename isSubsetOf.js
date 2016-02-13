Array.prototype.isSubsetOf = function(superSet) {
  for(i = 0; i < this.length; i++) {
      if(!superSet.includes(this[i])){
          return false;
      }
  }
  return true;
};
