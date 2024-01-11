const giveMeResult = (dayOfWeek) => {
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        dayOfWeek = "dayOff"
    } else {
        dayOfWeek = "weekday"
    };

    switch (dayOfWeek) {
        case "weekday":
            return("Будний день");
    
        case "dayOff":
            return("Выходной день");
    
        default:
            return("Некорректное значение дня недели");
};
};

giveMeResult("Friday");



const isInRange = (arg) => (arg >= 10 && arg <= 20 || arg === 0 || arg === 100) ? "true" : "false";
isInRange(5);

let prep = {
    name: "Igor",
    sizes: {
        height: 177,
        weight: 80
    }
};


const copyPrep = function (prep) {
    let prep2 = { ...prep };
    prep2.isMarried = true;
    prep2.name = "Sasha";
    return prep2;
};

copyPrep(prep.name);



let fruits = ["Яблоко", "Апельсин", "Слива"]; 
 
console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[2]); 
 
fruits.push('Бананас'); 
console.log(fruits); 

fruits.unshift('Бананас') 
console.log(fruits); 

fruits.shift() 
console.log(fruits); 

fruits.pop() 
console.log(fruits); 

console.log(fruits.join(',')) 

console.log(fruits.indexOf("Апельсин")); // выведет 1 
console.log(fruits.indexOf("Груша")); // выведет -1, так как "Груша" не является элементом массива 

let slicedFruits = fruits.slice(1, 2); // (start, end) 
console.log(slicedFruits); // выведет ["Апельсин"] 
// Создание нового массива, содержащего элементы от индекса 1 (включительно) и до конца массива 
let secondSlicedFruits = fruits.slice(1); 
console.log(secondSlicedFruits) // ['Апельсин', 'Слива'] 


let arr = ['сдавайтесь', 'сдавайтесь', 'Не сдавайтесь', 'не сдавайтесь', 'никогда, черт вас подери не сдавайтесь', 'при первой же трудности всегда сдавайтесь']


let newSentence = arr.slice(2, 5).join(',');
console.log(newSentence);




let fruits1 = ["Яблоко", "Апельсин", "Слива"]; 
 
let i = 0; 
while (i < fruits1.length) { 
    console.log(fruits1[i]); 
    i++; 
} 
 
for (let i = 0; i < fruits1.length; i++) { 
    console.log(fruits1[i]); 
} 
 
fruits1.forEach(fruit => console.log(fruit)); 
 
let mappedFruits = fruits1.map(fruit => fruit); 
console.log(mappedFruits);

 
console.log(fruits1.filter(el => el === "Слива")); // ОСТАВИТЬ "Слива" 
console.log(fruits1.filter(el => el !== "Слива")); // ОСТАВИТЬ ВСЕ КРОМЕ "Слива" 


const users = [ 
    { 
        id: 1, 
        name: 'John', 
        surName: 'Doe', 
        address: '123 Main St' 
    }, 
    { 
        id: 2, 
        name: 'Jane', 
        surName: 'Smith', 
        address: '456 Elm St' 
    }, 
    { 
        id: 3, 
        name: 'Tom', 
        surName: 'Johnson', 
        address: '789 Oak St' 
    } 
]; 

console.log(users.map((user) => ( 
    user.id === 1 ? { ...user, user: 'Alice' } : user 
))); 

const newUser = { 
    id: 4, 
    user: 'Emily', 
    surName: 'Davis', 
    address: '321 Pine St' 
}; 
console.log([...users, newUser]); 


console.log(users.filter(idFilter => idFilter.id <= 2));

const tasks = [ 
    { id: 1, title: "HTML&CSS", isDone: true }, 
    { id: 2, title: "JS", isDone: true }, 
    { id: 3, title: "ReactJS", isDone: false } 
] 

const updatedTasks = tasks.map(task => {
    if (task.title === "JS") {
      return { ...task, title: "I like JS" };
    }
    return task;
  });

  const newUSer1 = {
    id: 4, title: "Next", isDone: false
  }
  console.log(...tasks, newUSer1);



  const numbers = [ 
    [1, 2, 3, 4, 5], 
    [10, 20, 30, 40, 50], 
    [100, 200, 300, 400, 500], 
]; 
 
numbers.map(row => console.log(row)) 
 
numbers.map(row => { 
    row.map(number => console.log(number)); 
}); 







