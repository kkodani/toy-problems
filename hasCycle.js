var hasCycle = function(linkedList){
  var fast = linkedList;
  var slow = linkedList;

  while(fast !== null && fast.next !== null) {

    slow = slow.next;
    fast = fast.next.next;

    if(fast === slow) {
      return true;
    }
  }

  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    var slow = head;
    var fast = head.next;
    while(slow && fast) {
        if(slow === fast) {
            return true;
        }
        slow = slow.next;
        if(!fast.next) {
            return false;
        }
        fast = fast.next.next;

    }
    return false;
};
