const { part1, part2 } = require('./solution');

describe('part1', () => {
  test('16.1 sums invalid values across all nearby tickets', () => {
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
    expect(part1(input)).toBe(71);
  });
});

describe('part2', () => {
  test('16.2 identifies which row is which and multiplies values of "departure" values on own ticket', () => {
    const input = `departure station: 0-1 or 4-19
row: 0-5 or 8-19
departure platform: 0-13 or 16-19

your ticket:
11,12,13

nearby tickets:
3,9,18
15,1,5
5,14,9`;
    expect(part2(input)).toBe(156);
  });
});
