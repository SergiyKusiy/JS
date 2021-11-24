export const withdraw = (clients, balances, client, amount) => {
   const index = clients.indexOf(client);
   if (balances[index] >= amount) {
     return balances[index] - amount;
   }
   return -1;
 };