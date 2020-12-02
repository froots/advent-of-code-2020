function parseRule(rule) {
  const re = /(?<min>\d+)-(?<max>\d+) (?<char>\w)/;
  const { groups } = rule.match(re);
  return {
    n1: Number(groups.min),
    n2: Number(groups.max),
    char: groups.char,
  };
}

module.exports = parseRule;
