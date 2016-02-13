var bind = function(func, context){
  //args initially passed in on bind invocation
  var newArgs = Array.prototype.slice.call(arguments, 2)
  return function(){
    //args passed in on bound function invocation
    var otherArgs = Array.prototype.slice.call(arguments);
    return func.apply(context, newArgs.concat(otherArgs));
  }
};  


Function.prototype.bind = function(context) {
  var THIS=this;
  var newArgs = Array.prototype.slice.call(arguments, 1)
  return function(){
    //Your code here
    var otherArgs = Array.prototype.slice.call(arguments);
    return THIS.apply(context, newArgs.concat(otherArgs));
  }
};
