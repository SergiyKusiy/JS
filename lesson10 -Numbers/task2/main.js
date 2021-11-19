// 1.Learn requirement
// 2. I map array, and and return which array
// 3. arr.map(num => Number.parseInt(num));
// eslint-disable-next-line radix
const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));

// 1.Learn requirement
// 2. I map array, and and return which array
// 3. arr.map(num => parseInt(num));.
// eslint-disable-next-line radix
const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));

// 1.Learn requirement
// 2. I map array, and and return which array
// 3. arr.map(num => Number.parseFloat(num)));
// eslint-disable-next-line radix
const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));

// 1.Learn requirement
// 2. I map array, and and return which array
// 3. arr.map(num => parseFloat(num)));
// eslint-disable-next-line radix
const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));

const parse = [17.123, 18.2, 19.9, 10.1238];
console.log(getParsedIntegers(parse));
console.log(getParsedIntegersV2(parse));
console.log(getParsedFloats(parse));
console.log(getParsedFloatsV2(parse));
