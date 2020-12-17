const fieldPositions = require('./field-positions');

test('Calculates field positions based on example values and rules', () => {
  const rules = new Map();
  rules.set('class', [
    [0, 1],
    [4, 19],
  ]);
  rules.set('row', [
    [0, 5],
    [8, 19],
  ]);
  rules.set('seat', [
    [0, 13],
    [16, 19],
  ]);
  const nearby = [
    [3, 9, 18],
    [15, 1, 5],
    [5, 14, 9],
  ];

  const actual = fieldPositions(rules, nearby);
  expect(actual.get('class')).toBe(1);
  expect(actual.get('row')).toBe(0);
  expect(actual.get('seat')).toBe(2);
});
