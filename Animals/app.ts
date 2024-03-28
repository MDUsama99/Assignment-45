let animals: string[] = ["Lions", "Alligators", "Hyenas"];
for (let i = 0; i < animals.length; i++) {
    let killer = animals[i];
    console.log(killer);
}
//Modification
for (let i = 0; i < animals.length; i++) {
    let killer = animals[i];
    console.log(`${killer} likes to hunt for their meal`);
}
//Adding another sentance
console.log("They all are carnivorous animals and not a pet Obviously!")