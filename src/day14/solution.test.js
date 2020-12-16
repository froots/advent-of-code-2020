const { part1 } = require('./solution');

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
