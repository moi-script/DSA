
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}


class TestManualTree {
    constructor() {
       this.root = null;

    }
}



const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
const node4 = new Node(40);
const node5 = new Node(50);
const node6 = new Node(60);

const rootNode = new Node(1);

rootNode.left = node1;
rootNode.right = node2;

node1.left = node3;
node1.right = node4;

node3.left = node6

console.log(rootNode);



