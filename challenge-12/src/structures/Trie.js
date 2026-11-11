function Node(value) {
  this.value = value;
  this.isEndOfWord = false;
  this.children = {};
  this.product = null;
}

export class Trie {
  constructor() {
    this.root = new Node(null);
  }

  insert(word, product = null) {
    let current = this.root;

    for (let character of word) {
      if (current.children[character] === undefined) {
        current.children[character] = new Node(character);
      }

      current = current.children[character];
    }
    current.isEndOfWord = true;
    current.product = product;
  }

  search(word) {
    let current = this.root;
    for (let character of word) {
      if (current.children[character] === undefined) {
        return false;
      }
      current = current.children[character];
    }
    return current.isEndOfWord;
  }
}