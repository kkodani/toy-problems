/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    var merged;
    if(l1 && l2) {
        if(l1.val < l2.val) {
            merged = l1;
            l1 = l1.next;
        }
        else if(l2.val <= l1.val) {
            merged = l2;
            l2 = l2.next;
        }
    }
    else if(l1) {
        merged = l1;
        l1 = l1.next;
    }
    else if(l2) {
        merged = l2;
        l2 = l2.next;
    }
    else {
        merged = [];
    }
    var result = merged;

    while(l1) {
        if(!l2 || l1.val < l2.val) {
            merged.next = l1;
            merged = merged.next;
            l1 = l1.next;
        }
        else if(!l1 || l2.val <= l1.val) {
            merged.next = l2;
            merged = merged.next;
            l2 = l2.next;
        }
    }
    while(l2) {
        merged.next = l2;
        merged = merged.next;
        l2 = l2.next;
    }

    return result;
};
