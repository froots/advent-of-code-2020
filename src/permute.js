/**
 * Permutes an array into 2 item arrays of permutions.
 * At some point this could be adapted to take any size of permutation chunk
 * @param {Array} items The array of items to create permutations from
 */

function permute(items) {
  if (items.length < 2) {
    return [];
  }

  const [head, ...rest] = items;

  return [...rest.map((r) => [head, r]), ...permute(rest)];
}

module.exports = permute;
