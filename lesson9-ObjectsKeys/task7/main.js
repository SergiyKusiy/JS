const getTotalRevenue = transaction =>
   transaction.map(count => count.amount).reduce((a,b) => a+b)