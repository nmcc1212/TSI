const prompt = require('prompt-sync')();

// create a doubly linked list with 10 elelments
let doublyLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            prev: 10,
            next: {
                value: 16,
                prev: 5,
                next: {
                    value: 2,
                    prev: 16,
                    next: {
                        value: 11,
                        prev: 2,
                        next: {
                            value: 3,
                            prev: 11,
                            next: {
                                value: 7,
                                prev: 3,
                                next: {
                                    value: 8,
                                    prev: 7,
                                    next: {
                                        value: 1,
                                        prev: 8,
                                        next: {
                                            value: 9,
                                            prev: 1,
                                            next: null
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

// output the list
function spitOut(list) {
    let currentNode = list.head;
    while (currentNode !== null) { // go until end of list
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}

// output including next and prev
function spitOutVerbose(list) {
    let currentNode = list.head;
    while (currentNode !== null) { // go until end of list
        console.log(currentNode);
        currentNode = currentNode.next;
    }
}

// add a node to the end of the list
function lmaoAppend(list, value) {
    let newNode = { // define new node
        value: value,
        prev: null,
        next: null
    };
    let currentNode = list.head;
    while (currentNode.next !== null) { // go until no more
        currentNode = currentNode.next;
    }
    currentNode.next = newNode; // add new node to end
    newNode.prev = currentNode; // new node points to previous node
    return list;
}
console.log ("Enter a number to append to the list: ");
let appendValue = prompt();
lmaoAppend(doublyLinkedList, appendValue);
console.log("appending");
spitOut(doublyLinkedList);
spitOutVerbose(doublyLinkedList);

// add a node to the beginning of the list
function lmaoPrepend(list, value) {
    let newNode = { // define new node
        value: value,
        prev: null,
        next: list.head // new node points to current head
    };
    list.head.prev = newNode; // current head points to new node
    list.head = newNode; // new node becomes head
    return list;
}

console.log ("Enter a number to prepend to the list: ");
let prependValue = prompt();
lmaoPrepend(doublyLinkedList, prependValue);
console.log("prepending");
spitOut(doublyLinkedList);
spitOutVerbose(doublyLinkedList);

// remove a node from the beginning of the list
function lmaoHeadPop(list) {
    list.head = list.head.next; // head becomes next node
    list.head.prev = null; // new head points to null
    return list;
}
spitOut(doublyLinkedList);
console.log("headpop");
lmaoHeadPop(doublyLinkedList);
spitOut(doublyLinkedList);

// remove a  node from the end of the list

function lmaoPop(list) {
    let currentNode = list.head;
    while (currentNode.next.next !== null) { // go until 2nd to last
        currentNode = currentNode.next;
    }
    currentNode.next = null; // remove last node
    return list;
}
lmaoPop(doublyLinkedList);
console.log("popping");
spitOut(doublyLinkedList);
// remove a node from given position in list
function lmaoRemove(list, position) {
    let currentNode = list.head;
    let counter = 0;
    while (counter !== position - 1) { // go until position
        currentNode = currentNode.next;
        counter++; // increment counter
    }
    currentNode.next = currentNode.next.next; // remove node
    return list;
}
console.log ("Enter a position to remove from the list: ");
let removeValue = prompt();
lmaoRemove(doublyLinkedList, removeValue);
console.log("removing");
spitOut(doublyLinkedList);
