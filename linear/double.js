class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}


class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode; // new tail to keep the recursive links
        }

        this.length++;
        return this;

    }

    unshift(val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.next = newNode;
            newNode.prev = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    insert(index, val) {
        const nodes = this.head;
        const newNode = new Node(val);
        while (nodes.next !== null) {

            if (nodes.length - 1 === index) {

                nodes.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
                // current.next =  newNode;
                // newNode.prev = current.tail;
            }
            nodes = nodes.next;
        }

        this.length++;

        return this;

    }




    pop() {
        if (!this.head) return undefined;

        const popppedNode = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = popppedNode.prev;
            this.tail.next = null;
            popppedNode.prev = null;
        }
        this.length--;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
            const shiftVal = this.head;


        if (this.length === 1) {

            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftVal.next;
            this.head.prev = null;
            shiftVal.next = null;

        }

        this.length--;
        return this;

    }

    get(index) {
        if(this.length - 1 < index || index < 0) return undefined;
      

        let count, current;


        if(index <= this.length/2 ){
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }

        } else {
            count = this.length -1;
            current = this.tail

            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
    }


    remove(index) {

        
        if(this.length > index || index < 0) return undefined;

        if(index === 0) return this.shift();

        if(index === this.length -1 ) return this.pop();

        let removeNode = this.get(index);

        let prevNode = removeNode.prev;
        let currentNode = removeNode.next;

        prevNode.next = currentNode;
        currentNode.prev = prevNode;

        removeNode.prev= null;
        removeNode.next= null;

        this.length--;
        return removeNode;
    }

}


const linkedlist = new DoubleLinkedList();



const response = {
    status: 200,
    message: "Succesfully updated the database",
    date: new Date()
}


const response2 = {
    status: 200,
    message: "This is for testing purposes",
    date: new Date()
}



const testInsert = {
    status: 200,
    message: "This is for testing insert only",
    date: new Date()
}


linkedlist.push(response);
linkedlist.push(response2);
linkedlist.push(testInsert);

// linkedlist.push(response);
// linkedlist.unshift(response2);

// linkedlist.insert(1, testInsert);

// console.log("Results :: ", linkedlist.head.next.prev.next);
// console.log("Results :: ", linkedlist.head.next.prev.next);
// console.log("Results :: ", linkedlist.head.next.next);




function populateList(length) {
    for (let i = 0; i < length; i++) {
        linkedlist.append(response);
    }


    console.log("linked list structure ::", linkedlist);

    // printLinkListForward(linkedlist.head)
    printLinkListBackward(linkedlist.tail)

}


function printLinkListForward(list) {
    let result = "";


    while (list.next !== null) {

        result += list.val.message + " <---> "
        list = list.next;
    }


    console.log("Result :: ", result);
}

function printLinkListBackward(list) {
    let result = "";


    while (list.prev !== null) {

        result += list.val.message + " <---> "
        list = list.prev;
    }
    console.log("Result :: ", result);
}


// populateList(20);