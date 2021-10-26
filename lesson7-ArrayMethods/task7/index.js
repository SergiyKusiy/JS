'use strict';

const increaseEvenEl = (arr, delta) => 
    Array.isArray(arr) ? 
        arr
            .flat().filter((a) => a % 2 === 0)
            .map((a) => a + delta) : null;

const arr4 = [1, 2, [5, 8, 10], 4, 5];
console.log(arr4);
console.log(increaseEvenEl(arr4, 3));