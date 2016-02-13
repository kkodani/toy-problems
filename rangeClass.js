var Range = function(start, end, step) {
  
  this.start = start;
  
  if(end === undefined) {
    this.end = start;
  }
  else {
    this.end = end;
  }

  if(step === undefined) {
    if(start > end) {
      this.step = -1;
    }
    else {
      this.step = 1;
    }
  }
  else {
    this.step = step;
  }
};

Range.prototype.size = function () {

  if(this.start === undefined) {
    return null;
  }
  
  var count=0;
  
  this.each(function(elt) {
    count++;
  });
  
  return count;
};

Range.prototype.each = function (callback) {

  if(this.start === undefined) {
    return null;
  }
  
  if(this.start > this.end) {
    for(var i=this.start; i>=this.end; i+=this.step) {
      callback(i);
    }
  }
  else {
    for(i=this.start; i<=this.end; i+=this.step) {
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {

  if(this.start === undefined) {
    return null;
  }
  
  var found = false;
  
  this.each(function(elt) {
    if(elt === val) {
      found = true;
    }
  });
  
  return found;
};
