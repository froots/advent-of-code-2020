// 'light red bags contain 1 bright white bag, 2 muted yellow bags.'

function parseRule(input) {
  let [colour, contents] = input.split(' bags contain ');
  
  if (contents.match(/^no/)) {
    contents = [];
  } else {
    contents = contents.split(', ').map((bag) => {
      const matches = bag.match(/^(?<count>\d+) (?<colour>.+) bags?\.?$/);
      if (!matches || !matches.groups) {
        return 
      }
      return {
        colour: matches.groups.colour,
        count: Number(matches.groups.count)
      };
    });
  }

  return { colour, contents };
}

module.exports = parseRule;