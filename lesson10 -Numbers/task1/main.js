// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for funtions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1.Learn requirement
// 2. I filter array, and find not finite numbers by Number.isFinite
// 3. arr.filter(num => Number.isFinite(num))

const getFiniteNumbers = arr => arr.filter(num => Number.isFinite(num));

// algo
// 1.Learn requirement
// 2. I filter array, and find not finite numbers by isFinite
// 3. arr.filter(num => isFinite(num))
const getFiniteNumbersV2 = arr => arr.filter(num => isFinite(num));

// algo;
// 1. Learn requirement
// 2. I filter array, and return all elements of array which Number.isNaN(num)
// 3.  arr.filter(num => Number.isNaN(num))
const getNaN = arr => arr.filter(num => Number.isNaN(num));

// 1. Learn requirement
// 2. I filter array, and return all elements of array which isNaN(num)
// 3.  arr.filter(num => isNaN(num))

const getNaNV2 = arr => arr.filter(num => isNaN(num));

// 1. Learn requirement
// 2. I filter array, and return all elements of array which Number.isInteger(num)
// 3.  arr.filter(num =>  Number.isInteger(num))

const getIntegers = arr => arr.filter(num => Number.isInteger(num));
