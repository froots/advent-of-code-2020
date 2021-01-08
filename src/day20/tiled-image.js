const Tile = require('./tile');

class TiledImage {
  constructor(input) {
    this.tiles = TiledImage.parse(input);
  }

  static parse(input) {
    return new Map(
      input.split('\n\n').map((tileInput) => {
        const tile = Tile.parse(tileInput);
        return [tile.id, tile];
      })
    );
  }

  borders() {
    const b = new Map();
    this.tiles.forEach((tile) => {
      const tileBorders = tile.borders();
      tileBorders.forEach((tileBorder) => {
        if (b.has(tileBorder)) {
          b.get(tileBorder).add(tile.id);
        } else {
          b.set(tileBorder, new Set([tile.id]));
        }
      });
    });
    return b;
  }
}

module.exports = TiledImage;
