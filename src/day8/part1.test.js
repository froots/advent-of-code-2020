const part1 = require('./part1');

test('8.1 returns value of accumulator when program hits infinite loop', () => {
  const input = [
    'nop +0',
    'acc +1',
    'jmp +4',
    'acc +3',
    'jmp -3',
    'acc -99',
    'acc +1',
    'jmp -4',
    'acc +6',
  ];
  expect(part1(input)).toBe(5);
});