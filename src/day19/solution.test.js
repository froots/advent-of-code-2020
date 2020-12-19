const { part1 } = require('./solution');

describe('19.1', () => {
  test('Returns total of valid messages', () => {
    const rules = [
      '0: 4 1 5',
      '1: 2 3 | 3 2',
      '2: 4 4 | 5 5',
      '3: 4 5 | 5 4',
      '4: "a"',
      '5: "b"',
    ];

    const messages = ['ababbb', 'bababa', 'abbbab', 'aaabbb', 'aaaabbb'];

    expect(part1(rules, messages)).toBe(2);
  });
});
