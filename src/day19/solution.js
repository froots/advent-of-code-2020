const Regexer = require('./regexer');

function part1(ruleInput, messages) {
  const regexer = new Regexer(Regexer.parseRules(ruleInput));
  const regex = regexer.fullRegex();
  return messages.filter((message) => regex.test(message)).length;
}

function part2(ruleInput, messages) {
  return 10;
}

module.exports = { part1, part2 };
