const permute = require('./permute');

test('permute with zero items returns empty array', () => {
  const input = [];
  expect(permute(input)).toEqual([]);
});

test('permute with items count less than size of permutation chunks returns empty array', () => {
  const input = [1];
  expect(permute(input)).toEqual([]);
});

test('permute with single chunk returns chunk', () => {
  const input = [1, 2];
  expect(permute(input)).toEqual([[1, 2]]);
});

test('permute with three items and size of 2 returns 3 permutations', () => {
  const input = [1, 2, 3];
  expect(permute(input)).toEqual([
    [1, 2],
    [1, 3],
    [2, 3],
  ]);
});
