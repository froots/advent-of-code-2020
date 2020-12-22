function reverse(str) {
  return [...str].reverse().join('');
}

class Tile {
  constructor(id, imageData) {
    this.id = id;
    this.imageData = imageData;
    this.borderValues = null;
  }

  static parse(input) {
    const [first, ...imageData] = input.split('\n');
    const id = Number(first.replace('Tile ', '').replace(':', ''));
    return new Tile(id, imageData);
  }

  borders() {
    if (this.borderValues) {
      return this.borderValues;
    }

    this.borderValues = new Set();

    [
      this.imageData[0],
      this.imageData[this.imageData.length - 1],
      this.imageData.map((row) => row[0]).join(''),
      this.imageData.map((row) => row[row.length - 1]).join(''),
    ].forEach((border) => {
      this.borderValues.add(this.toBinary(border));
      this.borderValues.add(this.toBinary(reverse(border)));
    });

    return this.borderValues;
  }

  toBinary(str) {
    return Number(`0b${str.replace(/\#/g, '1').replace(/\./g, '0')}`);
  }
}

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

  arrange() {
    // Create map of border values => tile ids that have them
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

  ids() {
    return [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
  }
}

module.exports = TiledImage;
