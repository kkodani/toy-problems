var Stack = function() {
  var storage = [];

  this.push = function(value){
    storage.push(value);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    if(outbox.size() === 0) {
      while(inbox.size() !== 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
};


//
//
// /**
//  * @constructor
//  */
// var Queue = function() {
//     this.enq = [];
//     this.deq = [];
//     this.size = 0;
// };
//
// /**
//  * @param {number} x
//  * @returns {void}
//  */
// Queue.prototype.push = function(x) {
//     this.enq.push(x);
//     this.size++;
// };
//
// /**
//  * @returns {void}
//  */
// Queue.prototype.pop = function() {
//     if(this.deq.length > 0) {
//         this.deq.pop();
//     }
//     else {
//         while(this.enq.length > 0) {
//             this.deq.push(this.enq.pop());
//         }
//         this.deq.pop();
//     }
//     this.size--;
// };
//
// /**
//  * @returns {number}
//  */
// Queue.prototype.peek = function() {
//     if(this.deq.length > 0) {
//         return this.deq[this.deq.length-1];
//     }
//     else {
//         while(this.enq.length > 0) {
//             this.deq.push(this.enq.pop());
//         }
//         return this.deq[this.deq.length-1];
//     }
// };
//
// /**
//  * @returns {boolean}
//  */
// Queue.prototype.empty = function() {
//     return this.size === 0;
// };
