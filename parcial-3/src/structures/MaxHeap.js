export class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(song) {
    this.heap.push(song);
    this.percolateUp();
  }

  pop() {
    if (this.heap.length === 0) return undefined;
    this.swap(0, this.heap.length - 1);
    const max = this.heap.pop();
    this.percolateDown(0);
    return max;
  }

  peek() {
    return this.heap[0];
  }

  percolateUp() {
    let curr = this.heap.length - 1;
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2);
      if (this.heap[curr].plays > this.heap[parent].plays) {
        this.swap(curr, parent);
        curr = parent;
      } else {
        break;
      }
    }
  }

  percolateDown(index) {
    let curr = index;
    while (2 * curr + 1 < this.heap.length) {
      const left = 2 * curr + 1;
      const right = 2 * curr + 2;
      const maxChild =
        right < this.heap.length && this.heap[right].plays > this.heap[left].plays ? right : left;
      if (this.heap[maxChild].plays > this.heap[curr].plays) {
        this.swap(curr, maxChild);
        curr = maxChild;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size() {
    return this.heap.length;
  }

  top(k) {
    const copy = new MaxHeap();
    this.heap.forEach((song) => copy.push(song));
    const result = [];
    while (copy.size() > 0 && result.length < k) {
      result.push(copy.pop());
    }
    return result;
  }
}