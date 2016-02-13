function isBalanced (string) {
  var stack = [];
    var balanced = false;
    for(var i=0; i<string.length; i++) {
        if(string[i] === '(' || string[i] === '[' || string[i] === '{') {
            stack.push(string[i]);
        }
        else if(string[i] === ')') {
            if(stack.pop() !== '(') {
                return false;
            }
        }
        else if(string[i] === ']') {
            if(stack.pop() !== '[') {
                return false;
            }
        }
        else if(string[i] === '}') {
            if(stack.pop() !== '{') {
                return false;
            }
        }
    }
    return stack.length === 0;
}
