let currentUser = {
    name: 'Alex'
};

let card1 = {
    type: 'debit',
    networkType: 'mastercartd',
    currencyType: 'USD',
    balance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    isActive: true
};

let card2 = {
    type: 'credit',
    networkType: 'visa',
    currencyType: EUR,
    balance: 1343.53,
    number: 923265432101032,
    expirationYear: 2026,
    expirationMonth: 4,
    isActive: false
};

document.write('<h1>', 'Hello, ' + currentUser.name, '</h1>');
document.write('<h2>', 'Cards: ', '</h2>');
document.write('<div>');
document.write(<b>, card1.type + ' card', </b>);
document.write('</div>');