var compose = function(){
  //Your code here  
  var functionList = Array.prototype.slice.call(arguments);
  
  return function() {
    var result = functionList[functionList.length-1].apply(null, arguments);
    for(var i=functionList.length-2; i>=0; i--) {
        result = functionList[i](result);
    }
    return result;
  };
};

var pipe = function(){
  //Your code here  
  var functionList = Array.prototype.slice.call(arguments);
  
  return function() {
    var result = functionList[0].apply(null, arguments);
    for(var i=1; i<functionList.length; i++) {
        result = functionList[i](result);
    }
    return result;
  };
};
