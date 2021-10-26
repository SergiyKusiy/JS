function checker(arr) {
  if(!Array.isArray(arr)) {
      return null;
  }
  const newMas = arr.slice();
  if(Math.max(...newMas) + Math.min(...newMas) > 1000){
    return true;
  }
  return false;
}