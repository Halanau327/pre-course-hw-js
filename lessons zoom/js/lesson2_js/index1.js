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