function valid(value, rules) {
  return [...rules.values()]
    .flat()
    .some((range) => value >= range[0] && value <= range[1]);
}

module.exports = valid;
