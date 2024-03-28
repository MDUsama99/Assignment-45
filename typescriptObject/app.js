var Countries = [
    { name: "Pakistan", capital: "Islamabad", population: 79172566 },
    { name: "India", capital: "Dehli", population: 1487326763 },
    { name: "Bangladesh", capital: "Dhaka", population: 89134342 },
    { name: "Srilanka", capital: "Colombo", population: 23414516 },
    { name: "Afghanitan", capital: "kabul", population: 26321531 }
];
console.log("\n\"Information About Countries:");
for (var i = 0; i < Countries.length; i++) {
    console.log("\"Country:\" ".concat(Countries[i].name));
    console.log("\"Capital:\" ".concat(Countries[i].capital));
    console.log("\"population:\" ".concat(Countries[i].population));
    console.log("`-_-_-_-_-_-_-_-_-_-`");
}
