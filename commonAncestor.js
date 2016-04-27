var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(p1, p2){
  var p1a = this.getAncestorPath(p1);
  var p2a = this.getAncestorPath(p2);
  if(p1a && p2a) {
    for(var i = p1a.length-1; i >= 0; i--) {
      if(p2a.includes(p1a[i])) {
        return p1a[i];
      }
    }
  }
  return null;
}

Tree.prototype.getAncestorPath = function(child){

  if(this === child) {
    return [this];
  }
  else {
    for(var i = 0; i < this.children.length; i++){
      var path = this.children[i].getAncestorPath(child);
      if(path) {
        return [this].concat(path);
      }
    }
    return null;
  }
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
