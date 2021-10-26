'use strict';

const cloneArr = (arr) => (Array.isArray(arr) ? [...arr] : null);

const arr4 = [1, 2, 4, 5];
console.log(arr4);
console.log(cloneArr(arr4));
