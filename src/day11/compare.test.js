const compare = require('./compare');

test('Compares two identical shallow arrays', () => {
  const arr1 = ['a', 'b', 'c'];
  const arr2 = ['a', 'b', 'c'];
  expect(compare(arr1, arr2)).toBeTruthy();
});

test('Compares two different shallow arrays', () => {
  const arr1 = ['a', 'b', 'c'];
  const arr2 = ['a', 'c', 'b'];
  expect(compare(arr1, arr2)).toBeFalsy();
});

test('Compares where there are non-arrays', () => {
  expect(compare(null, ['a'])).toBeFalsy();
});
