let result = 0;

 const getMemo = () => result;

 const add = num => (result += num);

 const decrease = num => (result -= num);

 const reset = () => (result = 0);

add(23);
console.log(getMemo());

decrease(20);
console.log(getMemo());

reset();
console.log(getMemo());