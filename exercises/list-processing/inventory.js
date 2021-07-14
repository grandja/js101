function transactionsFor(id, transactions) {
  let specificTransactions = [];

  transactions.forEach(transaction => {
    if (transaction.id === id) {
      specificTransactions.push(transaction);
    }
  });

  console.log(specificTransactions);
  return specificTransactions;
}

// Tests
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/* Alternate Solution
function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}
*/