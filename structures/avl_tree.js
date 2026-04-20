class Node { // set the node for avl 
  constructor(key) {
    this.key = key; 
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree { 
  getHeight(node) { // get height function
    return node ? node.height : 0;
  }

  getBalance(node) { // this will look if tree is balance or unbalance if right or left subtree is not the same 
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  rightRotate(y) { // right part
    let x = y.left; // get the left  
    let T2 = x.right; // get the right of that left

    x.right = y; // assign the right of the left of y to new value 
    y.left = T2; // assign the  left of y to the right of the left of y  

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  insert(node, key) {
    if (!node) return new Node(key);

    if (key < node.key) {
      node.left = this.insert(node.left, key);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key);
    } else {
      return node; 
    }

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    let balance = this.getBalance(node);


    if (balance > 1 && key < node.left.key) {
      return this.rightRotate(node);
    }

    if (balance < -1 && key > node.right.key) {
      return this.leftRotate(node);
    }

    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  preOrder(node) {
    if (node) {
      console.log(node.key);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

const tree = new AVLTree();
let root = null;

const keys = [10, 20, 30, 40, 50, 25];
keys.forEach(key => {
  root = tree.insert(root, key);
});

console.log("Pre-order traversal:");
tree.preOrder(root);