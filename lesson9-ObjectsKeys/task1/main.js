const getAdults = obj =>
  Object.entries(obj)
    .filter(arr => arr[1] >= 18)
    .map(arr => arr[0]);
