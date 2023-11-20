

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