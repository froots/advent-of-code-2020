class TiledImage {
  constructor(input) {
    this.tiles = TiledImage.parse(input);
  }

  static parse(input) {
    return new Map(input.split('\n\n').map(TiledImage.parseTile));
  }

  static parseTile(input) {
    const [first, ...imageData] = input.split('\n');
    const id = Number(first.replace('Tile ', '').replace(':', ''));
    return [id, imageData];
  }

  arrange() {}

  ids() {
    return [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
  }
}

module.exports = TiledImage;
