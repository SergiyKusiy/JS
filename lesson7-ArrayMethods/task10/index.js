'use strict';

const increaseEvenEl = (arr) => 
    Array.isArray(arr) ? arr.flat().reduce((a, b) => a + b) : null;

const arr4 = [1, 2, [5, 8, 10], 4, 5];
console.log(arr4);
console.log(increaseEvenEl(arr4));