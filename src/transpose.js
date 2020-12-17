function transpose(arr) {
  return arr[0].map((n, col) => {
    return arr.map((row) => row[col]);
  });
}

module.exports = transpose;
