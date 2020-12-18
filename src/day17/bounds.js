class Bounds {
  constructor(dimensions, sizes) {
    this.ranges = Array(dimensions)
      .fill([0, 1])
      .map((range, i) => (sizes[i] ? [0, sizes[i]] : range));
  }

  get dimensions() {
    return this.ranges.map(([min, max]) => max - min);
  }

  coords(i = 0) {
    let range = this.ranges[i];
    let cds = [];
    let restCoords = this.ranges[i + 1] ? this.coords(i + 1) : [[]];

    for (let idx = range[0]; idx < range[1]; idx += 1) {
      cds = [...cds, restCoords.map((arr) => [idx, ...arr])];
    }

    return cds.flat();
  }

  expand() {
    this.ranges = this.ranges.map(([min, max]) => [min - 1, max + 1]);
  }
}

module.exports = Bounds;
