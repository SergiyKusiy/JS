let result = 0;

const getMemo = () => result;

// eslint-disable-next-line no-return-assign
const add = num => (result += num);

// eslint-disable-next-line no-return-assign
const decrease = num => (result -= num);

// eslint-disable-next-line no-return-assign
const reset = () => (result = 0);

add(23);
console.log(getMemo());

decrease(20);
console.log(getMemo());

reset();
console.log(getMemo());
