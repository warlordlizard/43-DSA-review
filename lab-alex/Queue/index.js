class Node {
  constructor(val) {
    this.val = val;
  }
}

class Queue {
  constructor() {
    this.next = null;
    this.length = 0;
  }
  enqueque(val) {
    let node = new Node(val);
    this[this.length] = node
    if(!this.next) this.next = 0;
    this.length++;
    return node;
  }
  dequeue() {
    let temp = this[this.next]
    delete(this[this.next])
    this.next++;
    this.length--;
    return temp;
  }
}

module.exports = {
  'Node': Node,
  'Queue': Queue,
}