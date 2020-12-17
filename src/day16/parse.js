function parse(input) {
  const rules = new Map();
  let [rulesText, ticketText, nearbyText] = input.split('\n\n');

  for (ruleText of rulesText.split('\n')) {
    let [name, ranges] = ruleText.split(': ');
    ranges = ranges.split(' or ').map((range) => range.split('-').map(Number));
    rules.set(name, ranges);
  }

  const ticket = ticketText.split('\n')[1].split(',').map(Number);

  const nearby = nearbyText
    .split('\n')
    .slice(1)
    .map((tkt) => tkt.split(',').map(Number));

  return {
    rules,
    ticket,
    nearby,
  };
}

module.exports = parse;
