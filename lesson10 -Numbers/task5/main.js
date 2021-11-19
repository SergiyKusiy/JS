// algo
// 1.використати reduce() для того що порахувати суму чисел масива
// 2.arr.reduce((a,s) => a+b);
// 3. використати Math.floor()
const getTotalPrice = arr => {
  const sumEl = arr.reduce((acc, sum) => acc + sum, 0);
  return '$' + Math.floor(sumEl * 100) / 100;
};
const array = [1.113, 5.555, 2.12, 9.01];
console.log(getTotalPrice(array));
