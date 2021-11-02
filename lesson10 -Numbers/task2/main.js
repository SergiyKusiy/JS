const getParsedIntegers = arr => arr.map(num => Number.parseInt(num))

const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));

const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));

const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));

let parse = [17.123, 18.2, 19.9, 10.1238]
console.log(getParsedIntegers(parse));
console.log(getParsedIntegersV2(parse));
console.log(getParsedFloats(parse));
console.log(getParsedFloatsV2(parse));