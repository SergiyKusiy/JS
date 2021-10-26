'use strict';

const withdraw = (clients, balances, client, amount) => {
  const item = clients.indexOf(client);
  return (balances[item] > amount) ? balances[item] -= amount : -1;
}

const arr1 = ['Den', 'Julia', 'Mike', 'Tom', "John"];
const arr2 = [970, 840, 204, 10300, -6];
console.log(arr1);
console.log(arr2);
console.log(withdraw(arr1, arr2, 'Tom', 1000));
