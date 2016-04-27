var LinkedList = function (initialValue) {
  if(initialValue) {
    this.head = {value: initialValue, next: null};
    this.tail = this.head;
  }
  else {
    this.head = null;
    this.tail = null;
  }
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = {value: value, next: null}
  if(this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  }
  else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  if(this.head === null) {
    return null;
  }
  var temp = this.head;
  this.head = this.head.next;
  delete temp;
  if(this.head === null) {
    this.tail = null;
  }
};

LinkedList.prototype.contains = function(target) {
  var temp = this.head;
  var result = false;
  while(temp) {
    if(temp.value === target) {
      result = true;
    }
    temp = temp.next;
  }
  return result;
};
