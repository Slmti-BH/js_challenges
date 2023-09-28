class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.head.tail = newNode;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
    return this;
  }
}
