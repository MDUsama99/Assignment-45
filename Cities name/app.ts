function city_country(city: string, country: string): string{
    return `${city}, ${country}`;
}
let pair0 = city_country("Karachi", "Pakistan");
let pair1 = city_country("Kabul", "Afghanistan");
let pair2 = city_country("Tehran", "Iran");

console.log(pair0);
console.log(pair1);
console.log(pair2);