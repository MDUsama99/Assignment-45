let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i =0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinalending: string;

    if (number === 1) {
        ordinalending = "st";
    } else if (number === 2) {
        ordinalending = "nd";
    }  else if (number === 3) {
        ordinalending = "rd";
    }  else {
        ordinalending = "th";
    }

    console.log(`${number}${ordinalending}`);
}