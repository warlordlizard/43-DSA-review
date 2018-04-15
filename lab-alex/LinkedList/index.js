class LinkNode {
  constructor(data, next) {
    this.next = next;
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(val) {
    let node = new LinkNode(val, null);
    node.next = this.head;
    this.head = node;
  }
  append(val) {
    let node = new LinkNode(val, null);
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
  find(index) {
    let i = 0;
    let current = this.head;
    while (current.next !== null) {
      if (i === index) {
        return current.data;
      }
      current = current.next;
      i++
    }
  }
}

module.exports = { 'LinkedList': LinkedList,
'LinkNode':LinkNode}