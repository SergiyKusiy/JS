// 1.Learn requirement
// 2. Використати методи чисел для рішення задачі
// 3. Math.floor(number * 100) / 100,

const multiRound = number => [
   Math.floor(number * 100) / 100,
   Math.trunc(number * 100) / 100,
   Math.ceil(number * 100) / 100,
   Math.round(number * 100) / 100,
   +number.toFixed(2),
];
console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
