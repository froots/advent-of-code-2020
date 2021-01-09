const { parse } = require('./parse');

test('parses a line of input to data structure', () => {
  const line = 'mxmxvkd kfcds sqjhc nhms (contains dairy, fish)';
  const expectedIngredients = ['mxmxvkd', 'kfcds', 'sqjhc', 'nhms'];
  const expectedAllergens = ['dairy', 'fish'];
  expect(parse(line)).toEqual([expectedIngredients, expectedAllergens]);
});
