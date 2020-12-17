const { part1, part2 } = require('./solution');

describe('14.1', () => {
  test('Sums remaining values after instructions executed', () => {
    const input = [
      'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
      'mem[8] = 11',
      'mem[7] = 101',
      'mem[8] = 0',
    ];
    expect(part1(input)).toBe(165n);
  });

  test('Works with larger mask', () => {
    const input = ['mask = 1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX0', 'mem[1] = 3'];
    expect(part1(input)).toBe(34359738370n);
  });
});

describe('14.2', () => {
  test('Sums remaining values after instructions executed', () => {
    const input = [
      'mask = 000000000000000000000000000000X1001X',
      'mem[42] = 100',
      'mask = 00000000000000000000000000000000X0XX',
      'mem[26] = 1',
    ];
    expect(part2(input)).toBe(208n);
  });
});
