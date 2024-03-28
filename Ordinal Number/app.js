var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var ordinalending = void 0;
    if (number === 1) {
        ordinalending = "st";
    }
    else if (number === 2) {
        ordinalending = "nd";
    }
    else if (number === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log("".concat(number).concat(ordinalending));
}
