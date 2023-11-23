import {getCurrentUser, getCards} from "./data.js";

const currentUser = getCurrentUser();
const cards = getCards();

const rootElement = document.querySelector('#root');
const headerElement = createHeader(currentUser.name, currentUser.balance);
rootElement.appendChild(headerElement);

const cardsElement = renderCards(cards);
rootElement.appendChild(cardsElement);

function createHeader(userName, userBalance) {
  const h1Element = document.createElement('h1');
  h1Element.innerText = `Hello, ${userName}, balance: ${userBalance}`

  return h1Element;
}

function renderCards(cards) {
  const cardContainerElement = document.createElement("div");
  const headerElement = renderCardsHeader();
  cardContainerElement.appendChild(headerElement);


  for (let i = 0; i < cards.length; i++) {
    const divElement = document.createElement('div');

    const cardElement = createCardElement(cards[i]);

    divElement.appendChild(cardElement);

    const transactionsElement = createCardTransactionsElement(cards[i].transactions);
    divElement.appendChild(transactionsElement);

    cardContainerElement.appendChild(divElement);

  }
  return cardContainerElement;
}

function renderCardsHeader() {
  const headerElement = document.createElement('h2');
  headerElement.innerText = "Cards:";
  return headerElement;
}

function createCardElement(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card-block');

  const cardTypeElement = document.createElement('b');
  cardTypeElement.innerText = card.type + " card";

  cardElement.appendChild(cardTypeElement);

  const br1 = document.createElement('br');

  cardElement.appendChild(br1);

  let networkLogo = document.createElement('img');
   switch (card.networkType) {
    case "visa":
      networkLogo.src = "visa_logo.png";
      break;
    case "mastercard":
      networkLogo.src = "mastercard_logo.png";
      break;
  }

  cardElement.appendChild(networkLogo)

  cardElement.appendChild(document.createElement('br')); 


  let currentBalance = document.createElement('b');
  currentBalance.innerText = 'current balance:';
  cardElement.appendChild(currentBalance)
  

   let currencySign = "";

  switch (card.currencyType) {
    case "USD":
      currencySign = "💵";
      break;
    case "EUR":
      currencySign = "💶";
      break;
    case "GBP":
      currencySign = "💷";
      break;
  }

  let currentBalanceValueElement = document.createElement('span');
  currentBalanceValueElement.innerText =  currencySign + card.currentBalance;
  cardElement.appendChild(currentBalanceValueElement)

  cardElement.appendChild(document.createElement('br'));

  let cardNumberElement = document.createElement('h4');
  cardNumberElement.innerText =  card.number;
  cardElement.appendChild(cardNumberElement);

  let expirationDateElement = document.createElement('span');
  expirationDateElement.innerText =   card.expirationMonth + '/' + card.expirationYear;
  cardElement.appendChild(expirationDateElement);
  return cardElement;
}

function createCardTransactionsElement(transactions) {
  let historyTransactionsContainer = document.createElement('div');
  
  let historyTransactionTitleElement = document.createElement('h2');
  historyTransactionTitleElement.innerText =  'History Transaction';
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
  
  amountElement.innerText =  transaction.amount;
  if (transaction.amount > 0) {
    amountElement.classList.add('income');
  } else {
    amountElement.classList.add('outcome');
  }
  transactionElement.appendChild(amountElement);

  return transactionElement;
}