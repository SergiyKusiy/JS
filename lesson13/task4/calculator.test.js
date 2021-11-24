export { calc } from './calculator'

it('should return sum of two numbers', () => {
   let result = calc('7 + 7');
   expect(result).toEqual('7 + 7 = 14');
})

it('should return difference of two numbers', () => {
   let result = calc('10 - 6');
   expect(result).toEqual('10 - 6 = 4');
})

it('should return multiplication of two naumbers', () => {
   const result = calc('3 * 3');
   expect(result).toEqual('3 * 3 = 9');
});
 
 it('should return division of two naumbers', () => {
   const result = calc('8 / 8');
   expect(result).toEqual('8 / 8 = 1');
});
 
 it('should return null', () => {
   const result = calc([7 + 7]);
   expect(result).toEqual(null);
});
 
 it('should return sum of two naumbers', () => {
   const result = calc(7 + 7);
   expect(result).toEqual(null);
});