export function getCurrentUser() { // создаем функцию текущего пользователя 
    let newUser = {
        name: "Alex",
        role: "Admin",
        balance: 100,
    };
    return newUser;
}

let card1 = {
    id: 1, // айди нам нужен для того, чтобы находился объект в функции updateCard (для изменения данных карточек)
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
    id: 2,
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
    id: 3,
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

let cards = [card1, card2, card3]; // создаем массив с карточками

let dataChangedEventListener = function () { // инициализируем функцию-обработчик событий для обновления данных.
};

export function addEventListener(listener) { // коллбэк. экспортируем ее в index.js, в котором в качестве параметра используем renderApp.
    dataChangedEventListener = listener;
}

export function getCards() { // эта функция нужна для того, чтобы перенести наш массив с объектами в index.js., для рендера в renderApp.
    return cards;
}

export function createCard(cardNumber) { // функция для создания новой карточки.
    let newCard = {
        id: Number(new Date()),
        type: "debit",
        networkType: "mastercard",
        currencyType: "USD",
        currentBalance: 0,
        number: cardNumber,
        expirationYear: 0,
        expirationMonth: 0,
        isActive: false,
        transactions: [],
    };
    cards.unshift(newCard); // метод unshift, применяется к массиву для того, чтобы новый элемент массива (newCard) добавить в начало, тем самым сместив существующие элементы вправо.
    dataChangedEventListener(); // получили данные, запускаем наш RenderApp.
}
 
export function updateCard(id, newCardNumber, newCardType) { // экспортируем функцию для обновления информации о карточке.
    const card = cards.find(card => card.id === id); // проверяем, совпадает ли значение свойства id текущей карты с заданным id. 
    card.number = newCardNumber;
    card.networkType = newCardType;
    dataChangedEventListener();
}