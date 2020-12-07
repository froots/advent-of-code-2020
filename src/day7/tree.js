class Tree {
  constructor() {
    this.nodes = new Map();
  }

  addEdge(parent, child, weight) {
    const parentNode = this.addNode(parent);
    const childNode = this.addNode(child);
    parentNode.addChild(childNode, weight);
    childNode.addParent(parentNode, weight);
  }

  addNode(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    }
    const node = new Node(value);
    this.nodes.set(value, node);
    return node;
  }

  *parentSearch(first) {
    const visited = new Set();
    const visitList = [];
    visitList.push(first);
    while(visitList.length > 0) {
      const node = visitList.pop();
      if (node && !visited.has(node)) {
        yield node;
        visited.add(node);
        node.parents.forEach((weight, parent) => visitList.push(parent));
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.parents = new Map();
    this.children = new Map();
  }

  addChild(node, weight) {
    this.children.set(node, weight);
    return this;
  }

  addParent(node, weight) {
    this.parents.set(node, weight);
    return this;
  }
}

module.exports = Tree;