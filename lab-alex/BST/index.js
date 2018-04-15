class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(node) {
    if(this.root === null) {
      this.root = node;
    } else {
      this._insert(this.root, node)
    }
  }

  _insert(root, node) {
    if(node.val < root.val) {
      if(!root.left) {
        root.left = node;
      } else {
        this._insert(root.left, node);
      }
    } else {
      if(!root.right) {
        root.right = node;
      } else {
        this._insert(root.right, node);
      }
    }
  }
  find(val) {
    let result;
    _traverse(this.root)
    function _traverse(node) {
      if(node.val === val) result=true;
      if(node.left) _traverse(node.left);
      if(node.right) _traverse(node.right);
    }
    if(result !== true) result=false;
    return result;
  }

  findMax() {
    let current = this.root;
    while(current.right !== null) {
      current = current.right;
    }
    return current.val;
  }
  findMin() {
    let current = this.root;
    while(current.left !== null) {
      current = current.left;
    }
    return current.val;
  }
  findNearest(val) {
    let diff = Math.abs(val - this.root.val)
    let nearest = this.root;
    _traverse(this.root)
    function _traverse(node) {
      if (Math.abs(val-node.val)<diff) {
        diff = Math.abs(val-node.val);
        nearest = node;
      }
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    return nearest;
  }
  calcHeight() {
    let height = 0
    _traverse(this.root)
    function _traverse(node) {
      height++;
      if(node.right) _traverse(node.right);
    }
    return height -1;
  }
}



module.exports = {
  'Node': Node,
  'BST': BST,
}