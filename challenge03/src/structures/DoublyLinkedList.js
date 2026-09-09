import DoublyNode from "./DoublyNode";

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.current = null;
  }

  append(value) {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
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
    const node = this.peek(value);
    if (!node) return null;

    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;

    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;

    this.length--;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  back() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
    return this.current;
  }

  forward() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
    return this.current;
  }

  canGoBack() {
    return !!(this.current && this.current.prev);
  }

  canGoForward() {
    return !!(this.current && this.current.next);
  }
}

export default DoublyLinkedList;