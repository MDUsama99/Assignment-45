// Store a person's name in a variable
var personNames = ["Ali", "Bilal", "Usama", "Babar", "Saim"];
// Print a personalized message
// console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);
// Print each person's name by accessing each element in the array
for (var i = 0; i < personNames.length; i + 2) {
    console.log("Hello ".concat(personNames[i], " How are you doing today"));
}
