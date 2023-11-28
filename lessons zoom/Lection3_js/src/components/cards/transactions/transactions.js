export function createCardTransactionsElement(transactions) {
    let historyTransactionsContainer = document.createElement('div');

    let historyTransactionTitleElement = document.createElement('h2');
    historyTransactionTitleElement.innerText = 'History Transaction';
    historyTransactionsContainer.appendChild(historyTransactionTitleElement);



    const ulElement = document.createElement('ul');

    for (let j = 0; j < transactions.length; j++) {
        const transactionElement = createTransactionElement(transactions[j])
        ulElement.appendChild(transactionElement);
    }

    historyTransactionsContainer.appendChild(ulElement);

    return historyTransactionsContainer;
}

function createTransactionElement(transaction) {
    const transactionElement = document.createElement('li');
    transactionElement.innerText = transaction.title + ", " + transaction.date;

    let amountElement = document.createElement('span');

    amountElement.innerText = transaction.amount;


    if (transaction.amount > 0) {
        amountElement.innerText += ""
        amountElement.classList.add('income');
    } else {
        amountElement.innerText+= ""
        amountElement.classList.add('outcome');
    }
    transactionElement.appendChild(amountElement);

    return transactionElement;
}