function findDivCount(a, b, n){ 
    let col = 0;
    for(let i = a; i <= b; i += 1){
      if(i % n === 0){
        col += 1;
      }
    }
    return col;
  }