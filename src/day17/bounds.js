class Bounds {
  constructor(xSize, ySize, zSize) {
    this.x = [0, xSize];
    this.y = [0, ySize];
    this.z = [0, zSize];
  }

  get dimensions() {
    return [
      this.x[1] - this.x[0],
      this.y[1] - this.y[0],
      this.z[1] - this.z[0],
    ];
  }

  get coords() {
    const cds = [];
    for (let z = this.z[0]; z < this.z[1]; z += 1) {
      for (let y = this.y[0]; y < this.y[1]; y += 1) {
        for (let x = this.x[0]; x < this.x[1]; x += 1) {
          cds.push([x, y, z]);
        }
      }
    }
    return cds;
  }

  expand() {
    this.x = [this.x[0] - 1, this.x[1] + 1];
    this.y = [this.y[0] - 1, this.y[1] + 1];
    this.z = [this.z[0] - 1, this.z[1] + 1];
  }
}

module.exports = Bounds;
