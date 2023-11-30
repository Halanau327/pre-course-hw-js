​const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const filterColors = colors.filter (color => color === "черный" || color === "красный" || color === "желтый");
    const colorsString = filterColors.join("-");
    console.log(colorsString);
}

createColorString();
