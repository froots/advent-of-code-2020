const Regexer = require('./regexer');

function part1(ruleInput, messages) {
  const regexer = new Regexer(ruleInput);
  const regex = regexer.fullRegex();
  return messages.filter((message) => regex.test(message)).length;
}

function part2(ruleInput, messages) {
  const regexer = new Regexer(ruleInput);
  regexer.rules.set(8, '42 | 42 8');
  regexer.rules.set(11, '42 31 | 42 11 31');
  let _42 = regexer.make(42);
  let _31 = regexer.make(31);
  regexer.cache.set(regexer.rules.get(8), `(?:${_42}+)`);
  regexer.cache.set(regexer.rules.get(11), `(?:${_42}+${_31}+)`);

  const regex = regexer.fullRegex();
  console.log(regex);
  return messages.filter((message) => regex.test(message)).length;
}

module.exports = { part1, part2 };
