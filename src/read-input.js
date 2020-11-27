/* eslint-disable no-console */
const fs = require('fs');

module.exports = function readInput(num, cb) {
  const filePath = `./data/day${num}.txt`;
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw new Error("Couldn't read file", err);
    }
    return cb(data.toString());
  });
};
