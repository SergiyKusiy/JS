'use strict';

/*
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
      if(!Array.isArray(arr)) {
      return null;
    }
    const newMas = arr.slice();
    for(let i = 0; i < newMas.length; i+=1){
      if(newMas[i] % 2 !== 0){
        continue;
      }
      newMas[i] += delta;
    }
    return newMas;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
