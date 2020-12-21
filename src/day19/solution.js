const Regexer = require('./regexer');

function part1(ruleInput, messages) {
  const regexer = new Regexer(ruleInput);
  const regex = regexer.fullRegex();
  return messages.filter((message) => regex.test(message)).length;
}

function part2(ruleInput, messages) {
  const regexer = new Regexer(ruleInput);
  let _42 = regexer.make(42);
  let _31 = regexer.make(31);

  const regex = new RegExp(`^(?:(?<g42>${_42}+)(?<g31>${_31}+))$`);
  return messages
    .filter((message) => regex.test(message))
    .filter((message) => {
      let matches = message.match(regex);
      let matches42 = matches.groups.g42.match(new RegExp(_42, 'g'));
      let matches31 = matches.groups.g31.match(new RegExp(_31, 'g'));
      return matches42.length > matches31.length;
    }).length;
}

module.exports = { part1, part2 };
