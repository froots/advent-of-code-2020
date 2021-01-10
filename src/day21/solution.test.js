const { part1, part2 } = require('./solution');

const input = [
  'mxmxvkd kfcds sqjhc nhms (contains dairy, fish)',
  'trh fvjkl sbzzf mxmxvkd (contains dairy)',
  'sqjhc fvjkl (contains soy)',
  'sqjhc mxmxvkd sbzzf (contains fish)',
];

test('21.1 example', () => {
  expect(part1(input)).toBe(5);
});

test('21.2 example', () => {
  expect(part2(input)).toBe('mxmxvkd,sqjhc,fvjkl');
});
