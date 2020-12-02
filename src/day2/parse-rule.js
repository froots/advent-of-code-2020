function parseRule(rule) {
  const re = /(?<min>\d+)-(?<max>\d+) (?<char>\w)/;
  const { groups } = rule.match(re);
  return {
    min: Number(groups.min),
    max: Number(groups.max),
    char: groups.char,
  };
}

module.exports = parseRule;
