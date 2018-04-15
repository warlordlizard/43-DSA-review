class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  } 
  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }
}

module.exports = {
  'Node': Node,
  'Stack': Stack,
}