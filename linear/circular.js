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

    push (val)  {
        const newNode = new Node(val);

        if(this.length === 0){

        }
    }
}
