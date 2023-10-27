let x = 42; 
let y = "42";
if (x == y) {
    console.log("х и у равны по значению и типу");
} else if (x === y) {
    console.log("х и у равны по значению, но не равны по типу")
}