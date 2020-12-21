const TiledImage = require('./tiled-image');

function part1(input) {
  const image = new TiledImage(input); // parse input and create tiles
  image.arrange(); // calculate arrangement, flipping and rotating as needed

  return image
    .ids()
    .filter((row, y, rows) => y === 0 || y === rows.length - 1)
    .flatMap((row, y) => {
      return row.filter((col, x, cols) => x === 0 || x === cols.length - 1);
    })
    .reduce((prod, id) => prod * id, 1);
}

module.exports = { part1 };
