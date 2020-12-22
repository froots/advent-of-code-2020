const TiledImage = require('./tiled-image');

function part1(input) {
  const image = new TiledImage(input); // parse input and create tiles
  const singleBorderCounts = new Map();
  [...image.borders().entries()]
    .filter(([border, ids]) => ids.size === 1)
    .map(([border, ids]) => [border, [...ids.values()][0]])
    .forEach(([border, tileId]) => {
      if (singleBorderCounts.has(tileId)) {
        singleBorderCounts.set(tileId, singleBorderCounts.get(tileId) + 1);
      } else {
        singleBorderCounts.set(tileId, 1);
      }
    });
  const result = [...singleBorderCounts.entries()]
    .filter(([tileId, count]) => count === 4)
    .map(([tileId]) => tileId)
    .reduce((prod, n) => prod * n, 1);
  return result;
}

module.exports = { part1 };
