const regexCache = new Map();

function parseRule(rule) {
  if (rule.match(/"[ab]"/)) {
    return rule.replace(/"/g, '');
  }
  return rule.split(' | ').map((side) => side.split(' ').map(Number));
}

function parseRules(ruleInput) {
  const rules = new Map();
  const matcher = /^(?<num>\d+): (?<rule>.+)$/;
  for (line of ruleInput) {
    const { num, rule } = line.match(matcher).groups;
    rules.set(parseInt(num, 10), parseRule(rule));
  }
  return rules;
}

function makeRegex(rules, num = 0) {
  if (regexCache.get(num)) {
    return regexCache.get(num);
  }
  let rule = rules.get(num);

  if (typeof rule !== 'string') {
    rule =
      '(?:' +
      rule
        .map((seq) => seq.map((n) => makeRegex(rules, n)).join(''))
        .join('|') +
      ')';
  }

  regexCache.set(num, rule);
  return rule;
}

function part1(ruleInput, messages) {
  const rules = parseRules(ruleInput);
  const regex = new RegExp('^' + makeRegex(rules) + '$');
  console.log(regex);

  return messages.filter((message) => regex.test(message)).length;
}

module.exports = { part1 };
