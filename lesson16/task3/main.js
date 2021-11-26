export const createArrayOfFunctions = num => {
  if (num === undefined) {
    return [];
  }

  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return typeof num !== 'number' ? null : arr;
};
