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
var swapPairs = function(head) {

    var retHead = head;
    if(head && head.next) {
        retHead = head.next;
    }

    var recurse = function(head) {
        if(!head) {
            return null;
        }
        else if(!head.next) {
            return head;
        }
        else {
            var temp = head.next;
            head.next = recurse(head.next.next);
            temp.next = head;
            return temp;
        }
    };

    recurse(head);

    return retHead;
};
