let myAccount = {
    name: 'Nathan Cobb',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount
}

addExpense(myAccount, 2.50)

console.log(myAccount)