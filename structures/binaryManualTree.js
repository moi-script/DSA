
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



// implement CRUD operations in binary tree,



// Create 

// O(log n) for balanced trees, O(n) for unbalanced (skewed) trees.
function  insertNode(value) {
    const newNode = new Node(value); // create new node whhen 

    const current =  this.root; // select the root
    if(current === null) { //  check if the root is null 
        current = newNode;
        return this;
    }



    while(true) { // a loop will run as long nothing breaks or returns
        if(value === current.value) return this; // condition if it contains similar value 

        if(value < current.value) {   // if the value is lessthan to the left of selected node, 
            if(current.left === null) { // also if left side of that node is nothing then set then the newnode
                current.left = newNode;
                return this; // return
            }

            current = current.left; // other wise, select it and will do the loop again  
        }

        else  { // if value is greater than the selected node value
            if(current.right === null) { // if the right part of selected node is nothing 
                current.right = newNode; // then set the newnode it to that right part
                return this; // return
            }
            current = current.right; // otherwise select the node to right
        }
    }
}


// search
function contains(value)  {
    if(this.root === null) return false;

    let current =  this.root;
    while(current) {
        if(value < current.value) {
            current = current.left;
        } else if(value > current.value){
            current = current.right;
        } else {
            return true
        }
    }

    return false;
}




// Read traversal

// in order (Left, Root, Right) -> visit node in ascending order
// pre order (Root, Left,  Right) -> for createing a copy of a tree
// post order (Left,  Right, Root) -> used for deleteing trees or evaluating math 
// level order (breadth first) -> for visiting top to bottom




// in order 

function inOrder (node)  {
    if(node) {
        inOrder(node.left); // Left
        console.log(node.value) // root
        inOrder(node.right) // right
    }
}


// pre order
function preOrder (node)  {
    if(node) {
        console.log(node.value) // root
        inOrder(node.left); // left
        inOrder(node.right) // right
    }
}



// post order
function postOrder (node)  {
    if(node) {
        inOrder(node.left); // left
        inOrder(node.right) // right
        console.log(node.value) // root

    }
}

function levelOrder (root)  {
    if(!root) return;


    const queue = [root];

    while(queue.length > 0) {
        const currentNode = queue.shift(); // remove first element
        console.log(currentNode.value);

        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
        
    }
}




