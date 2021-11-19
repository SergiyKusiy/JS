const superRound = (num, round) => [
   Math.floor(num * 10 ** round) / 10 ** round,
   Math.trunc(num * 10 ** round) / 10 ** round,
   Math.ceil(num * 10 ** round) / 10 ** round, 
   Math.round(num * 10 ** round) / 10 ** round,
   Number(num.toFixed(round)),
 ];
 console.log(superRound(11.12556, 2));  // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
 console.log(superRound(6.11234234, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11] 