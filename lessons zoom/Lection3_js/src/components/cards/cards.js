import { createCardTransactionsElement } from "./transactions/transactions.js"
import { CardCreationDialog } from "./dialogs/CardCreationDialog.js";
import { cardEditingDialog } from "./dialogs/CardEditingDialog.js";

export function renderCards(cards) {
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
  const headerElement = document.createElement('div');
  headerElement.innerText = "Cards:";

  const dialogElement = CardCreationDialog();
  headerElement.appendChild(dialogElement);

  const createCardButton = document.createElement("button");
  createCardButton.innerText = "create dard";
  createCardButton.addEventListener("click", function () {
    dialogElement.open = true;
  });

  headerElement.appendChild(createCardButton);

  return headerElement;
}

function createCardElement(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card-block');

  const cardTypeElement = document.createElement('b');
  cardTypeElement.innerText = card.type + " card";
  cardElement.appendChild(cardTypeElement);


  const editCardDialogElement = cardEditingDialog(card);
  cardElement.appendChild(editCardDialogElement);

  const showEditDialogButton = document.createElement('button');
  showEditDialogButton.innerText = 'edit';
  showEditDialogButton.addEventListener('click', function () {
    editCardDialogElement.open = true;
  })
  cardElement.appendChild(showEditDialogButton);


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
  currentBalanceValueElement.innerText = currencySign + card.currentBalance;
  cardElement.appendChild(currentBalanceValueElement)

  cardElement.appendChild(document.createElement('br'));

  let cardNumberElement = document.createElement('h4');
  cardNumberElement.innerText = card.number;
  cardElement.appendChild(cardNumberElement);

  let expirationDateElement = document.createElement('span');
  expirationDateElement.innerText = card.expirationMonth + '/' + card.expirationYear;
  cardElement.appendChild(expirationDateElement);
  return cardElement;
} 

