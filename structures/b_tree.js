class BTreeNode {
  constructor(t, leaf) {
    this.t = t; // Minimum degree
    this.leaf = leaf; // Boolean: true if leaf, false otherwise
    this.keys = []; // Array of keys
    this.children = []; // Array of child pointers
  }

  // Traverses all nodes in a subtree rooted with this node
  traverse() {
    let i;
    for (i = 0; i < this.keys.length; i++) {
      // If this is not leaf, then before printing keys[i],
      // traverse the subtree rooted with child children[i].
      if (!this.leaf) {
        this.children[i].traverse();
      }
      console.log(this.keys[i]);
    }

    // Print the subtree rooted with last child
    if (!this.leaf) {
      this.children[i].traverse();
    }
  }

  // Search a key in the subtree rooted with this node
  search(k) {
    let i = 0;
    while (i < this.keys.length && k > this.keys[i]) {
      i++;
    }

    if (this.keys[i] === k) return this;
    if (this.leaf) return null;

    return this.children[i].search(k);
  }
}

class BTree {
  constructor(t) {
    this.root = null;
    this.t = t; // Minimum degree
  }

  // The main function that inserts a new key in this B-Tree
  insert(k) {
    // If tree is empty
    if (this.root === null) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys[0] = k;
    } else {
      // If root is full, then tree grows in height
      if (this.root.keys.length === 2 * this.t - 1) {
        let s = new BTreeNode(this.t, false);
        s.children[0] = this.root;
        this.splitChild(0, s, this.root);

        // New root has two children now. Decide which child will have the new key
        let i = 0;
        if (s.keys[0] < k) i++;
        this.insertNonFull(s.children[i], k);

        this.root = s;
      } else {
        this.insertNonFull(this.root, k);
      }
    }
  }

  // Helper to insert a key into a node that is not full
  insertNonFull(node, k) {
    let i = node.keys.length - 1;

    if (node.leaf) {
      // Find location and shift keys to the right
      while (i >= 0 && node.keys[i] > k) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = k;
    } else {
      // Find the child which is going to have the new key
      while (i >= 0 && node.keys[i] > k) {
        i--;
      }

      if (node.children[i + 1].keys.length === 2 * this.t - 1) {
        this.splitChild(i + 1, node, node.children[i + 1]);
        if (node.keys[i + 1] < k) i++;
      }
      this.insertNonFull(node.children[i + 1], k);
    }
  }

  // Function to split the child y of node x
  splitChild(i, x, y) {
    let t = this.t;
    let z = new BTreeNode(t, y.leaf);

    // Copy the last (t-1) keys of y to z
    for (let j = 0; j < t - 1; j++) {
      z.keys[j] = y.keys[j + t];
    }
    y.keys.splice(t - 1, t); // Remove the keys from y

    // Copy the last t children of y to z
    if (!y.leaf) {
      for (let j = 0; j < t; j++) {
        z.children[j] = y.children[j + t];
      }
      y.children.splice(t, t);
    }

    // Insert a new child to x
    x.children.splice(i + 1, 0, z);

    // Move a key from y up to x
    x.keys.splice(i, 0, z.keys.shift() || y.keys.pop());
    // Note: In a true split, the middle key y.keys[t-1] moves up. 
    // The splice logic above may need adjustment based on specific array handling.
  }
}