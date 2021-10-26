'use strict';

/*
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  if(!Array.isArray(arr)) {
    return null;
  }
  const newMas = arr.slice();
  for(let i = 0; i < newMas.length; i+=1){
    newMas[i] *= newMas[i];
  }
  return newMas;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
