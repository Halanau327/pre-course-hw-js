const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter (colors => colors === "черный" || color === "красный" || color === "желтый").join('-');
    
};

console.log(createColorString());
