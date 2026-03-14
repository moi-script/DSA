class Node {
    constructor(value, key) {
        this.value = value;
        this.key = key;
        this.next = null;
    }
}


// this.next = {
//     value : "value",
//     next : "null"
// }


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val, key) {
        const newNode = new Node(val, key);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }

        this.length++;
        return this
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current

        while (current.next) {
            newTail = current;
            current = current.next; // loop reasign to nest search deeper
        }

        this.tail = newTail // set new Tail mark into second last part
        this.tail.next = null; // remove the last tail 
        this.length--;
        return current;
    }


    unshift(val, key) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            newNode.next = this.head; // most important -> previus whole value was assign to .next
            this.head = newNode
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index <= 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++
        }
        return current;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null; // The new tail will point to null


        for (let i = 0; i < this.length; i++) {
            next = node.next;   // Save the next node before we break the link
            node.next = prev;   // Flip the pointer backward
            prev = node;        // Move prev forward
            node = next;        // Move node forward
        }
        return this;
    }

}



// const list = new LinkedList();

// list.push("A");
// list.push("B");
// list.push("C");
// list.push("D");

// list.unshift('Start');

// console.log(list.get(1));




// Array vs LinkedList


// const iterations = 1000000; // 100k operations
// const testArray = [];
// const testList = new LinkedList();

// // --- TEST ARRAY ---
// console.time('Array Unshift');
// for (let i = 0; i < iterations; i++) {
//   testArray.unshift(i);
// }
// console.timeEnd('Array Unshift');

// // --- TEST LINKED LIST ---
// console.time('Linked List Unshift');
// for (let i = 0; i < iterations; i++) {
// //   testList.unshift(i);

//   testList.get(999999);

// }
// console.timeEnd('Linked List Unshift');


// Array wins for searching ITEMS
// LinkedList wins for Inserting large items




// const iterations = 50000;
// const testArray = new Array(iterations).fill(0);
// const testList = new LinkedList();

// // Fill the list first
// for (let i = 0; i < iterations; i++) {
//     testList.push(i);
// }

// const targetIndex = iterations - 1; // The very last item

// // --- TEST ARRAY ACCESS ---
// console.time('Array Get (Last Item)');
// const arrVal = testArray[targetIndex];
// console.timeEnd('Array Get (Last Item)');

// // --- TEST LINKED LIST ACCESS ---
// console.time('Linked List Get (Last Item)');
// const listVal = testList.get(targetIndex);
// console.timeEnd('Linked List Get (Last Item)');





// reverse() { 
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;

//     let next;
//     let prev = null; // The new tail will point to null

//     for (let i = 0; i < this.length; i++) {
//         next = node.next;   // Save the next node before we break the link
//         node.next = prev;   // Flip the pointer backward
//         prev = node;        // Move prev forward
//         node = next;        // Move node forward
//     }
//     return this;
// }



const elementTestReverse = ['A', 'B', 'C', 'D'];

function revereElements(arr) {
    let left = 0;
    let right = [...arr].length - 1;

    while (left < right) {
        let temp = arr[left];

        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

console.log('Reverse value:: ', revereElements(elementTestReverse))