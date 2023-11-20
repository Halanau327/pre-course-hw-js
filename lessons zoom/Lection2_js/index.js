// data
const currentUser = getCurrentUser();
const cards = getCards(currentUser);

const rootElement = document.querySelector('#root');

// render
renderHeader(currentUser.name, currentUser.balance);
renderCards(cards);

function getCurrentUser() {
  let newUser = {
    name: "Alex",
    role: "Admin",
    balance: 100
  };
  return newUser;
};

function getCards() {

  let card1 = {
    type: "debit",
    networkType: "mastercard",
    currencyType: "USD",
    currentBalance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    isActive: true,
    transactions: [
      {
        title: "Order Revenue",
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
      {
        title: "Order Revenue",
        amount: -874,
        date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
    ],
  };

  let card2 = {
    type: "credit",
    networkType: "visa",
    currencyType: "EUR",
    currentBalance: 1343.53,
    number: 9232654321012032,
    expirationYear: 2026,
    expirationMonth: 4,
    isActive: false,
    transactions: [
      {
        title: "Order Revenue",
        amount: -874,
        date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
      {
        title: "Order Revenue",
        amount: -874,
        date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
    ],
  };

  let card3 = {
    type: "debit",
    networkType: "mastercard",
    currencyType: "GBP",
    currentBalance: 3263.65,
    number: 554259349582930,
    expirationYear: 2028,
    expirationMonth: 3,
    isActive: true,
    //.. all existing properties
    transactions: [
      {
        title: "Order Revenue",
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
      {
        title: "Order Revenue",
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
    ],
  };

  let cards = [card1, card2, card3];

  return cards;
};

function renderHeader(userName, userBalance) {
  const h1Element = document.createElement('h1');
  h1Element.innerText = `Hello, ${userName}, balance: ${userBalance}`;
  rootElement.appendChild(h1Element);
};

function renderCards(cards) {
  renderCardsHeader();

  for (let i = 0; i < cards.length; i++) {
    const divElement = document.createElement('div');
    const cardElement = createCardElement(cards[i]);
    divElement.appendChild(cardElement);

    const transactionsElement = createCardTransactionsElement(cards[i].transactions);
    divElement.appendChild(transactionsElement);

    rootElement.appendChild(divElement);
  }
};

function renderCardsHeader() {
  const headerElement = document.createElement('h2');
  headerElement.innerText = "Cards:";
  rootElement.appendChild(headerElement);
};

function createCardElement(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card-block');

  const cardTypeElement = document.createElement('b');
  cardTypeElement.innerText = card.type + " card";

  cardElement.appendChild(cardTypeElement);

  const br1 = document.createElement("br");


  cardElement.appendChild(br1);

const networkLogo = document.createElement('img');
  switch (card.networkType) {
    case "visa":
      networkLogo.src = '/lessons zoom/Lesson2_js/visa_logo.png';
      break;
    case "mastercard":
      networkLogo.src = '/lessons zoom/js/mastercard_logo.png';
      break;
  }
  
  cardElement.appendChild(networkLogo);
  
  return cardElement;

  // document.write(networkLogo);
  // document.write("<b>", "current balance", "</b>", "<br>");

  // let currencySign = "";

  // switch (card.currencyType) {
  //   case "USD":
  //     currencySign = "💵";
  //     break;
  //   case "EUR":
  //     currencySign = "💶";
  //     break;
  //   case "GBP":
  //     currencySign = "💷";
  //     break;
  // }


  // document.write("<span>", currencySign + card.currentBalance, "</span>", "<br>");
  // document.write("<h4>", card.number, "</h4>");
  // document.write(
  //   "<span>",
  //   card.expirationMonth,
  //   "/",
  //   card.expirationYear,
  //   "</span>"
  // );

};

function createCardTransactionsElement(transactions) {
  const ulElement = document.createElement('ul');


  // document.write("<h2>", "History Transaction", "</h2>");
  // document.write("<ul>");

  for (let j = 0; j < transactions.length; j++) {
    const transactionElement = createTransactionsElement(transactions[j])
    ulElement.appendChild(transactionElement);
  }

  return ulElement;


  // document.write("</ul>");
  // document.write("</div>");
  // document.write("<hr>");
};

function createTransactionsElement(transaction) {
  const transactionElement = document.createElement('li');
  transactionElement.innerText = transaction.title + ", " + transaction.date;

  // document.write("<li>", transaction.title, ", ", transaction.date, ",");
  return transactionElement;
  // условный рендеринг
  // if (transaction.amount > 0) {
  //   document.write('<span class="income">', transaction.amount, "</span>");
  // } else {
  //   document.write('<span class="outcome">', transaction.amount, "</span>");
  // }

  // document.write("</li>");
}; 