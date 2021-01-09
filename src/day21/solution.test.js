const { part1 } = require('./solution');

test('21.1 example', () => {
  const input = [
    'mxmxvkd kfcds sqjhc nhms (contains dairy, fish)',
    'trh fvjkl sbzzf mxmxvkd (contains dairy)',
    'sqjhc fvjkl (contains soy)',
    'sqjhc mxmxvkd sbzzf (contains fish)',
  ];
  expect(part1(input)).toBe(5);
});
