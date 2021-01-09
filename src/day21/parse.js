function parse(line) {
  const [head, tail] = line.slice(0, -1).split(' (contains ');
  return [head.split(' '), tail.split(', ')];
}

module.exports = { parse };
