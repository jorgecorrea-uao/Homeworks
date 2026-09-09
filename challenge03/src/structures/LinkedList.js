import Node from "./Node";

class LinkedList {
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
      this.current = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  peek(value, current = this.head) {
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  size() {
    return this.length;
  }

  remove(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.length--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      if (!current.next) this.tail = current;
      this.length--;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  next() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
    return this.current;
  }

  reset() {
    this.current = this.head;
    return this.current;
  }
}

export default LinkedList;