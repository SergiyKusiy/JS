function getSum(startNum, endNum) {
    let sum = 0;
    for(let i = startNum; i <= endNum; i+=1){
      if(i % 2 === 1){
        continue;
      }
      sum += i;
    }
    return sum;
  }