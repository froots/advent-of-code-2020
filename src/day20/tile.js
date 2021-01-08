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

module.exports = Tile;
