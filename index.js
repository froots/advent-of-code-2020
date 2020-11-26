const days = require('./src/days');

const [_, __, day] = process.argv;

console.log(_, __, day);

if (day) {
  days[Number(day)]();
} else {
  days.forEach(day => day());
}
