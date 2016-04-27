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
