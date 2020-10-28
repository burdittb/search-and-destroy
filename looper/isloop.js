'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    const array = [];
    const value = linkedlist.head.value;
    let currentNode = linkedlist.head;


    while (currentNode.next) {
        if (array.includes(currentNode.value)) {
            return true; 
        } 
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop