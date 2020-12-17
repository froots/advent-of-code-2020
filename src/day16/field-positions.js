const transpose = require('../transpose');

function inRanges(value, ranges) {
  return ranges.some(([min, max]) => value >= min && value <= max);
}

function matchingFields(rules, values) {
  return [...rules.entries()]
    .filter(([, ranges]) => values.every((value) => inRanges(value, ranges)))
    .map(([label]) => label);
}

function fieldPositions(rules, nearby) {
  const matchingRules = transpose(nearby)
    .map((values, i) => [i, matchingFields(rules, values)])
    .sort((a, b) => a[1].length - b[1].length);

  let positions = new Map();

  matchingRules.forEach(([i, matches]) => {
    let filtered = matches.filter((rule) => !positions.has(rule));
    positions.set(filtered[0], i);
  });

  return positions;
}

module.exports = fieldPositions;
