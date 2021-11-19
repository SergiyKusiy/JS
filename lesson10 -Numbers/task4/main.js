// 1.Learn requirement
// 2. Вернути число по модулю завдяки Math.abs(), знайти найбільше Math.max().

const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) && arr.length === 0) {
    return null;
  }

  const absoluteValue = arr.map(abs => Math.abs(abs));
  return Math.max(...absoluteValue);
};

const arr = [-777, 3, -1, 45, -20];

console.log(getMaxAbsoluteNumber(arr));
