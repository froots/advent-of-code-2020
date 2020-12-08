const part2 = require('./part2');

test('8.2 returns value of accumulator when program executes a variation that results in a normal exit, without infinite loop', () => {
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
  expect(part2(input)).toBe(8);
});