function decode(seatCode) {
  return [
    parseInt(seatCode.substring(0, 7).replace(/F/g, '0').replace(/B/g, '1'), 2),
    parseInt(seatCode.substring(7).replace(/L/g, '0').replace(/R/g, '1'), 2)
  ];
}

module.exports = decode;