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
        root.right = node;
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
}



module.exports = {
  'Node': Node,
  'BST': BST,
}