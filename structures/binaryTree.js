// 1. The Node Class
// This represents a single "circle" in your tree.
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;  // Pointer to the left child
        this.right = null; // Pointer to the right child
    }
}

// 2. The Tree Class
class BinarySearchTree {
    constructor() {
        this.root = null; // The very top of the tree
    }

    // Main method to add a new value
    insert(value) {
        const newNode = new Node(value);

        // If the tree is empty, this new node becomes the root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        
        // Loop until we find the right empty spot
        while (true) {
            // Ignore duplicates
            if (value === current.value) return this;

            // If the value is LESS, go LEFT
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left; // Move the pointer down the left side
            } 
            // If the value is GREATER, go RIGHT
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right; // Move the pointer down the right side
            }
        }
    }

    // A quick way to test if a value exists in the tree (O(log n) time)
    contains(value) {
        if (this.root === null) return false;
        
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true; // Found it!
            }
        }
        return false;
    }
}

const myTree = new BinarySearchTree();
myTree.insert(50);
myTree.insert(30);
myTree.insert(70);
myTree.insert(20);
myTree.insert(40);

console.log(myTree.contains(40)); // true
console.log(myTree.contains(99)); // false