/* criando caixa de fluxo de família */

let family = {
    incomes: [1800, 1200, 250, 360.45],
    expenses: [320.35, 128.56, 176.87, 1450.00]
}

function sum(array) {
    let total = 0;
    
    for(let value of array) {
        total +=value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const its0k = total >= 0
    let balanceText = "negativo"
    if (its0k) {
        balanceText = "positivo"
    }

    console.log(`seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()