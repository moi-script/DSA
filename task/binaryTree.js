class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }


    insertNode(value) {
        const n = new Node(value);

        let current = this.root;
        if(!current) {
            current = n;
            return this;
        }

        while(true) {
            if(value === current.value) return this;
            if(value <current.value) {
                if(current.left === null) {
                    current.left = n;
                    return this;
                }
            } else {
                if(current.right === null) {
                    current.right = n;
                    return this;
                }
            }
        }
    }

    isNodeExist(value) {
        if(this.root === null) return false;

        let current = this.root;
        while(current) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else return true;
        }


        return false;
    }



    inOrder (node) { // sorting tree
        if(node) {
            this.inOrder(node.left);
            // push value
            this.inOrder(node.right)
        }
    }

    preOrder(node) { // cloning trees
        if(node) {
            // push value
            this.preOrder(node.left);
            this.preOrder(node.right);

        }
    }

    postOrder(node) { // deleting tree
        if(node) {
            this.preOrder(node.left);
            this.preOrder(node.right);
            // push value
        }
    }

    _findMin(node) {
        while(node.left) node = node.left;

        return node;
    }

    _deleteNode(node, value) {
        if(!node) return null;

        if(value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if(value > node.value) {
            node.right = this._deleteNode(node.right, value);
        }

        else {
            if(!node.right) return node.right;
            if(!node.left) return node.left;

            let succcesor = this._findMin(node.right);

            node.value = succcesor.value;

            node.right = this._deleteNode(node.right, succcesor.value);

        }

        return node;

    }

    updateNode(oldValue, newValue) {
        if(this.isNodeExist(oldValue)) {
            this._deleteNode(oldValue);
            this.insertNode(newValue);

        }
    }
}











