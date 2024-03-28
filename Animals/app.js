var animals = ["Lions", "Alligators", "Hyenas"];
for (var i = 0; i < animals.length; i++) {
    var killer = animals[i];
    console.log(killer);
}
//Modification
for (var i = 0; i < animals.length; i++) {
    var killer = animals[i];
    console.log("".concat(killer, " likes to hunt for their meal"));
}
//Adding another sentance
console.log("They all are carnivorous animals and not a pet Obviously!");
