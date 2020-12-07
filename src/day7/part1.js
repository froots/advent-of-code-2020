const parseRule = require('./parse-rule');
const Tree = require('./tree');

function part1(input, target) {
  const tree = Tree.fromRules(input.map(parseRule));
  return [...tree.traverseParents(tree.find(target))].length - 1;
}

module.exports = part1;