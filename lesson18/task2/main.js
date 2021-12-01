export const wallet = {
  transactions: [-4, 5, 40, 77],
  getMax() {
    // eslint-disable-next-line no-undef
    return Math.max(...transactions);
  },
  getMin() {
    // eslint-disable-next-line no-undef
    return Math.min(...transactions);
  },
};

// export const wallet = {
//   transactions: [1, 2, 3, 4, 5],
//   getMax() {
//     return Math.max.apply(null, this.transactions);
//   },
//   getMin() {
//     return Math.min.apply(null, this.transactions);
//   },
// };
console.log(wallet.getMax());
console.log(wallet.getMin());
