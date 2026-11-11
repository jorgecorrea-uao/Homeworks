import { Trie } from "./Trie.js";
import { MinHeap } from "./MinHeap.js";

export class SearchEngine {
  constructor() {
    this.trie = new Trie();
    this.products = [];
  }

  insert(name, popularity) {
    const word = name.trim().toLowerCase();
    if (!word) throw new Error("El producto debe tener nombre");
    if (this.trie.search(word)) throw new Error(`El producto "${word}" ya existe`);

    const product = { name: word, popularity: Number(popularity) };
    this.trie.insert(word, product);
    this.products.push(product);
    return product;
  }

  searchPrefix(prefix) {
    return this.trie.startsWith(prefix.trim().toLowerCase());
  }

  searchTopK(prefix, k) {
    const heap = new MinHeap([], (p) => p.popularity);

    for (const product of this.searchPrefix(prefix)) {
      heap.push(product);
      if (heap.size() > k) heap.pop();
    }

    const result = [];
    while (heap.size() > 0) {
      result.unshift(heap.pop());
    }
    return result;
  }
}