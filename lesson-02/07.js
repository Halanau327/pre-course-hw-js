let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = JSON.parse(JSON.stringify(passportMarried));
passportMarried2.married = true;
console.log(passportMarried);
console.log(passportMarried2);