


count1 += 3;
count2 -= 5;
total = count1 * count2; 
console.log(total);



let myVariable;
if (typeof myVariable === "undefined") {
    console.log("Значение переменной не было присвоено");
} else { 
    console.log("Значение переменной было присвоено");
}

 // Инкремент / декремент
 let counter = 2; 
 console.log(counter + 1);
 console.log(counter++);
 console.log(++counter);



let x = 41;
if (x % 2 === 0) {
    console.log("Число x четное");
} else {
    console.log("Число x не четное");
}

​let count1 = 10; 
let count2 = 20; 
let total = 0; 
 
total = ((count1 +=3) * (count2 -= 5));
console.log(total);


let str1 = 'iop';
let str2 = 'hjk';

let str3 = str1[1] + str2[2] + "!";
console.log(str3.toUpperCase());

let dayOfWeek = "Sunday";

switch (dayOfWeek) {
    case "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday": {
        console.log("Будний день");
        break;
    }
    case "Saturday" || "Sunday": {
        console.log("Выходной день");
        break;
    }
}
