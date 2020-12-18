const { part1 } = require('./solution');

describe('18.1', () => {
  test('Calculates sum of problem results', () => {
    const input = [
      '1 + 2 * 3 + 4 * 5 + 6', // 71
      '2 * 3 + (4 * 5)', // 26
      '5 + (8 * 3 + 9 + 3 * 4 * 3)', // 437
      '5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))', // 12240
      '((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2', // 13632
    ];
    expect(part1(input)).toBe(26406);
  });
});
