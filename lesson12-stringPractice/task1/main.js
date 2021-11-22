// '1 + 2' => '1 + 2 = 3'
// expression.split(' ')

const calc = expression => {
   const [a, operator, b] = expression.split(' ');
   let result;

   switch (operator) {
      case '+':
         result = +a + +b;
         break;
      case '-':
         result = a - b;
         break
      case '*':
         result = +a * +b;
         break
      case '/':
         result = a / b;
         break
   }
   return `${expression} = ${result}`
}
console.log(calc('1 + 2'));