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

  find(value) {
    return this.nodes.get(value);
  }

  *traverseParents(first) {
    const visited = new Set();
    const visitList = [];
    visitList.push(first);
    while (visitList.length > 0) {
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
    this.sumOfChildren = null;
  }

  addChild(node, weight) {
    this.children.set(node, weight);
    return this;
  }

  addParent(node, weight) {
    this.parents.set(node, weight);
    return this;
  }

  childSum() {
    if (this.sumOfChildren !== null) {
      return this.sumOfChildren;
    }
    const sum = [...this.children.entries()]
      .reduce((running, [childNode, weight]) => {
        return running + weight * childNode.childSum();
      }, 1);
    this.sumOfChildren = sum;
    return sum;
  }
}

Tree.fromRules = function(rules) {
  const tree = new Tree();
  rules.forEach(({colour, contents}) => {
    contents.forEach((child) => {
      tree.addEdge(colour, child.colour, child.count);
    })
  });
  return tree;
}

module.exports = Tree;