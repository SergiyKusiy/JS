let sum = 0;
const div = 1234;
for (let i = 0; i <= 1000; i+=1) {
    sum += i;
}
console.log(Math.floor(sum / div) > (sum % div));
