​const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const filterColors = colors.filter (color => color === "черный" || colors === "красный" || colors === "желтый");
    const colorsString = filterColors.join("-");
    return  colorsString;
    
}

console.log(createColorString());
