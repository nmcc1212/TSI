// create a linked list
let linkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};
// add a node to the end of the list
function ezappend420(list, value) {
  let newNode = {
    // define new node
    value: value,
    next: null,
  };
  let currentNode = list.head;
  while (currentNode.next !== null) {
    // go until no more
    currentNode = currentNode.next;
  }
  currentNode.next = newNode; // add new node to end
  return list;
}
ezappend420(linkedList, 1);
// add a node to the beginning of the list
function ezprepend420(list, value) {
  let newNode = {
    // define new node
    value: value,
    next: list.head, // new node points to current head
  };
  list.head = newNode; // new node becomes head
  return list;
}
ezprepend420(linkedList, 2);
// remove a node from the beginning of the list
function ezheadpop420(list) {
  list.head = list.head.next; // head becomes next node
  return list;
}
ezheadpop420(linkedList);
// remove a node from the end of the list
function ezpop420(list) {
  let currentNode = list.head;
  while (currentNode.next.next !== null) {
    // go until 2nd to last
    currentNode = currentNode.next;
  }
  currentNode.next = null; // remove last node
  return list;
}
ezpop420(linkedList);
// check if a node is in a list
function ezcheck420(list, value) {
  let currentNode = list.head;
  while (currentNode !== null) {
    // go until end of list
    if (currentNode.value === value) {
      // check if value matches
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}
ezcheck420(linkedList, 5);
