'use strict';

const increaseEvenEl = (arr) => 
    Array.isArray(arr) ? arr.reduce((a, b) => (a + b)) / arr.length : null;

const arr4 = [1, 2, 4, 5];
console.log(arr4);
console.log(increaseEvenEl(arr4));