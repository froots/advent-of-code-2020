const parseRule = require('./parse-rule');
const Tree = require('./tree');

function part1(input, target) {
  const rules = input.map(parseRule);
  const tree = new Tree();
  rules.forEach(({colour, contents}) => {
    contents.forEach((child) => {
      tree.addEdge(colour, child.colour, child.count);
    })
  });
  return [...tree.parentSearch(tree.nodes.get(target))].length - 1;
}

module.exports = part1;