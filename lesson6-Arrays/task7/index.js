function checkSum(arr) {
    if(!Array.isArray(arr)) {
      return null;
    }
    const newMas = arr.slice();
    let sum = 0;
    for(let num of newMas) {sum += num;}
    if(sum > 100){
        return true;
    }
return false;
  }