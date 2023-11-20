let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passport2 = {...passport};
passport2.name = "Ivan";

console.log(passport.name);
console.log(passport2.name);