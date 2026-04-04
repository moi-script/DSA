class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class CircularLinkedlist {          
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


// 1. Insertion (At the End)
// To add a new node to the end of the list:
// Create the NewNode.
// If the list is empty, Head becomes NewNode, and its next and prev both point to itself.
// If not empty:
// Find the Tail (which is just Head.prev).
// NewNode.next = Head
// NewNode.prev = Tail
// Tail.next = NewNode
// Head.prev = NewNode


    push (val)  {
        const newNode = new Node(val)
        if(this.length === 0){
             this.head = newNode;
             newNode.next = newNode;
             newNode.prev = newNode;
        } else {
            const tail = this.head.prev;  //  head.prev == tail <- [ 1, 2, 3] <- 
            newNode.next = this.head;
            newNode.prev = tail;
            this.tail.next = newNode;
            this.head.prev = newNode;
        }
    }

}
