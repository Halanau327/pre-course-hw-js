import { getCurrentUser, getCards, addEventListener } from "./data.js";
import { renderHeader } from "./components/header.js";
import { renderCards } from "./components/cards/cards.js";

addEventListener(renderApp);


export function renderApp() {
  const currentUser = getCurrentUser(); // вызываем текущего пользователя (данные в data)
  const cards = getCards(); // получаем массив

  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = '';
  const headerElement = renderHeader(currentUser.name, currentUser.balance);
  rootElement.appendChild(headerElement);

  const cardsElement = renderCards(cards);
  rootElement.appendChild(cardsElement);

};

renderApp();