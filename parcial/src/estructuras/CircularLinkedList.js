import Node from "./Node";

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.current = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
      newNode.next = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    newNode.next = this.head;
    this.tail = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  next() {
    if (this.current) {
      this.current = this.current.next;
    }
    return this.current;
  }

  toArray() {
    const result = [];
    if (!this.head) return result;

    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  print() {
    this.toArray().forEach((value) => console.log(value));
  }
}

export default CircularLinkedList;