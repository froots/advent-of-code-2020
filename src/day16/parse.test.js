const parse = require('./parse');

test('Parse function extracts expected data', () => {
  const input = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`;

  const [rules, ticket, nearby] = parse(input);

  expect(rules.get('class')).toEqual([
    [1, 3],
    [5, 7],
  ]);

  expect(rules.get('row')).toEqual([
    [6, 11],
    [33, 44],
  ]);

  expect(rules.get('seat')).toEqual([
    [13, 40],
    [45, 50],
  ]);

  expect(ticket).toEqual([7, 1, 14]);

  expect(nearby).toEqual([
    [7, 3, 47],
    [40, 4, 50],
    [55, 2, 20],
    [38, 6, 12],
  ]);
});
