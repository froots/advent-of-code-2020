/**
 * Permutes an array into 2 item arrays of permutions.
 * At some point this could be adapted to take any size of permutation chunk
 * @param {Array} items The array of items to create permutations from
 * @param {Number} size The size of each permutation. Defaults to 2.
 */

function permute(items, size = 2) {
  if (size > items.length || size < 1) {
    return [];
  }
  if (size === 1) {
    return items.map((item) => [item]);
  }

  const [head, ...rest] = items;

  return [
    ...permute(rest, size - 1).map((perms) => [head, ...perms]),
    ...permute(rest, size),
  ];
}

module.exports = permute;
