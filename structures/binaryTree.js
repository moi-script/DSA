class Node {
    constructor(value) {
        this.value = value;
        this.left = null;  
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

 
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        
        while (true) {
            if (value === current.value) return this;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left; 
            } 
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right; 
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
                return true; 
            }
        }
        return false;
    }
}

// const myTree = new BinarySearchTree();
// myTree.insert(50);
// myTree.insert(30);
// myTree.insert(70);
// myTree.insert(20);
// myTree.insert(40);

// console.log(myTree.contains(40)); // true
// console.log(myTree.contains(99)); // false



