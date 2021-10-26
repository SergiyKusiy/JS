function withdraw(clients, balance, client, amount) {
    for (let i = 0; i < clients.length; i += 1) {
      if (clients[i] === client) {
        if (balance[i] < amount) {
          return -1;
        } else {
          let residue = balance[i] - amount;
          balance[i] = residue;
          return residue;
        }
      }
    }
  }