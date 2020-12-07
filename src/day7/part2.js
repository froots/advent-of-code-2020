const parseRule = require('./parse-rule');
const Tree = require('./tree');

function part2(input, target) {
  const tree = Tree.fromRules(input.map(parseRule));
  return tree.find(target).childSum() - 1; // sum includes target bag
}

module.exports = part2;