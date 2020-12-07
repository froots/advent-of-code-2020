const parseRule = require('./parse-rule');
const Tree = require('./tree');

function part1(input, target) {
  const tree = Tree.fromRules(input.map(parseRule));
  return [...tree.parentSearch(tree.nodes.get(target))].length - 1;
}

module.exports = part1;