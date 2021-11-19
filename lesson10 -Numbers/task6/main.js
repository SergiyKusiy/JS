const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  // eslint-disable-next-line no-param-reassign
  from = Math.ceil(from);
  // eslint-disable-next-line no-param-reassign
  to = Math.floor(to);
  const randomNumbers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length - 1; i++) {
    randomNumbers[i] = Math.floor(Math.random() * (to - from) + from);
    randomNumbers.push(randomNumbers[i]);
  }
  return randomNumbers;
};
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
