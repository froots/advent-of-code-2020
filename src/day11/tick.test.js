const tick = require('./tick');
const { adjacent, visible } = require('./adjacent');

test('Tick creates new seating arrangements according to adjacency rule', () => {
  const step1 = [
    'L.LL.LL.LL',
    'LLLLLLL.LL',
    'L.L.L..L..',
    'LLLL.LL.LL',
    'L.LL.LL.LL',
    'L.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLLL',
    'L.LLLLLL.L',
    'L.LLLLL.LL',
  ];
  const step2 = [
    '#.##.##.##',
    '#######.##',
    '#.#.#..#..',
    '####.##.##',
    '#.##.##.##',
    '#.#####.##',
    '..#.#.....',
    '##########',
    '#.######.#',
    '#.#####.##',
  ];
  const step3 = [
    '#.LL.L#.##',
    '#LLLLLL.L#',
    'L.L.L..L..',
    '#LLL.LL.L#',
    '#.LL.LL.LL',
    '#.LLLL#.##',
    '..L.L.....',
    '#LLLLLLLL#',
    '#.LLLLLL.L',
    '#.#LLLL.##',
  ];
  const step4 = [
    '#.##.L#.##',
    '#L###LL.L#',
    'L.#.#..#..',
    '#L##.##.L#',
    '#.##.LL.LL',
    '#.###L#.##',
    '..#.#.....',
    '#L######L#',
    '#.LL###L.L',
    '#.#L###.##',
  ];
  const step5 = [
    '#.#L.L#.##',
    '#LLL#LL.L#',
    'L.L.L..#..',
    '#LLL.##.L#',
    '#.LL.LL.LL',
    '#.LL#L#.##',
    '..L.L.....',
    '#L#LLLL#L#',
    '#.LLLLLL.L',
    '#.#L#L#.##',
  ];
  const step6 = [
    '#.#L.L#.##',
    '#LLL#LL.L#',
    'L.#.L..#..',
    '#L##.##.L#',
    '#.#L.LL.LL',
    '#.#L#L#.##',
    '..L.L.....',
    '#L#L##L#L#',
    '#.LLLLLL.L',
    '#.#L#L#.##',
  ];
  expect(tick(step1, adjacent, 4)).toEqual(step2);
  expect(tick(step2, adjacent, 4)).toEqual(step3);
  expect(tick(step3, adjacent, 4)).toEqual(step4);
  expect(tick(step4, adjacent, 4)).toEqual(step5);
  expect(tick(step5, adjacent, 4)).toEqual(step6);
  expect(tick(step6, adjacent, 4)).toEqual(step6);
});

test('Tick creates new seating arrangements according to visible rule', () => {
  const step1 = [
    'L.LL.LL.LL',
    'LLLLLLL.LL',
    'L.L.L..L..',
    'LLLL.LL.LL',
    'L.LL.LL.LL',
    'L.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLLL',
    'L.LLLLLL.L',
    'L.LLLLL.LL',
  ];
  const step2 = [
    '#.##.##.##',
    '#######.##',
    '#.#.#..#..',
    '####.##.##',
    '#.##.##.##',
    '#.#####.##',
    '..#.#.....',
    '##########',
    '#.######.#',
    '#.#####.##',
  ];
  const step3 = [
    '#.LL.LL.L#',
    '#LLLLLL.LL',
    'L.L.L..L..',
    'LLLL.LL.LL',
    'L.LL.LL.LL',
    'L.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLL#',
    '#.LLLLLL.L',
    '#.LLLLL.L#',
  ];
  const step4 = [
    '#.L#.##.L#',
    '#L#####.LL',
    'L.#.#..#..',
    '##L#.##.##',
    '#.##.#L.##',
    '#.#####.#L',
    '..#.#.....',
    'LLL####LL#',
    '#.L#####.L',
    '#.L####.L#',
  ];
  const step5 = [
    '#.L#.L#.L#',
    '#LLLLLL.LL',
    'L.L.L..#..',
    '##LL.LL.L#',
    'L.LL.LL.L#',
    '#.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLL#',
    '#.LLLLL#.L',
    '#.L#LL#.L#',
  ];
  const step6 = [
    '#.L#.L#.L#',
    '#LLLLLL.LL',
    'L.L.L..#..',
    '##L#.#L.L#',
    'L.L#.#L.L#',
    '#.L####.LL',
    '..#.#.....',
    'LLL###LLL#',
    '#.LLLLL#.L',
    '#.L#LL#.L#',
  ];
  const step7 = [
    '#.L#.L#.L#',
    '#LLLLLL.LL',
    'L.L.L..#..',
    '##L#.#L.L#',
    'L.L#.LL.L#',
    '#.LLLL#.LL',
    '..#.L.....',
    'LLL###LLL#',
    '#.LLLLL#.L',
    '#.L#LL#.L#',
  ];
  expect(tick(step1, visible, 5)).toEqual(step2);
  expect(tick(step2, visible, 5)).toEqual(step3);
  expect(tick(step3, visible, 5)).toEqual(step4);
  expect(tick(step4, visible, 5)).toEqual(step5);
  expect(tick(step5, visible, 5)).toEqual(step6);
  expect(tick(step6, visible, 5)).toEqual(step7);
  expect(tick(step7, visible, 5)).toEqual(step7);
});
