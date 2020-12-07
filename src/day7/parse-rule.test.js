const parseRule = require('./parse-rule');

test('Parses a rule with contents into component parts', () => {
  const input = 'light red bags contain 1 bright white bag, 2 muted yellow bags.';
  expect(parseRule(input)).toEqual({
    colour: 'light red',
    contents: [
      {
        colour: 'bright white',
        count: 1
      },
      {
        colour: 'muted yellow',
        count: 2
      }
    ]
  });
});

test('Parses a rule without contents', () => {
  const input = 'dotted black bags contain no other bags.';
  expect(parseRule(input)).toEqual({
    colour: 'dotted black',
    contents: []
  });
});