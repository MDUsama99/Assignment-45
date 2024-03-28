let Countries: { name: string; capital: string; population: number; } []= [
    {name: "Pakistan", capital: "Islamabad", population: 79172566 },
    {name: "India", capital: "Dehli", population: 1487326763 },
    {name: "Bangladesh", capital: "Dhaka", population: 89134342},
    {name: "Srilanka", capital: "Colombo", population: 23414516},
    {name: "Afghanitan", capital: "kabul", population: 26321531}
];
console.log(`\n"Information About Countries:`);
for (let i = 0; i < Countries.length; i++) {
    console.log(`"Country:" ${Countries[i].name}`);
    console.log(`"Capital:" ${Countries[i].capital}`);
    console.log(`"population:" ${Countries[i].population}`);
    console.log("`-_-_-_-_-_-_-_-_-_-`");    
}