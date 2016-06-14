/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    var newHead = head;
    var recurse = function(prev, curr) {
        if(curr.next === null) {
            newHead = curr;
            curr.next = prev;
        }
        else {
            recurse(curr, curr.next);
            curr.next = prev;
        }


    }

    if(head !== null) {
        recurse(null, head);
    }

    return newHead;

    /*
    var backward = null;

    while(head !== null) {

        var forward = head.next;
        head.next = backward;
        backward = head;
        head = forward;
    }
    return backward;
    */
};
