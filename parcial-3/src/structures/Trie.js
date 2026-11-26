function Node(value) {
  this.value = value;
  this.isEndOfWord = false;
  this.children = {};
}

export class Trie {
  constructor() {
    this.root = new Node(null);
  }

  insert(word) {
    let current = this.root;
    for (let character of word) {
      if (current.children[character] === undefined) {
        current.children[character] = new Node(character);
      }
      current = current.children[character];
    }
    current.isEndOfWord = true;
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

  suggest(prefix) {
    let current = this.root;
    for (let character of prefix) {
      if (current.children[character] === undefined) {
        return [];
      }
      current = current.children[character];
    }
    const results = [];
    const collect = (node, word) => {
      if (node.isEndOfWord) results.push(word);
      for (let character in node.children) {
        collect(node.children[character], word + character);
      }
    };
    collect(current, prefix);
    return results;
  }
}