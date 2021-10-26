'use strict';


const squareArray = num =>
    Array.isArray(num) ? num.flat().map(x => Math.pow(x, 2)) : null;


const arr4 = [1, 2, [5, 8, 10], 4, 5];
console.log(arr4);
console.log(squareArray(arr4));