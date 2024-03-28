// // Test for Equality and Inequality wuth Strings
// let string1: string = 'Red'
// let string2: string = 'Apple'

// console.log("Equality test for Strings: Red and Apple. I predict False" );
// console.log(string1 === string2);

// console.log("Ineuality test for Strings: Red and Apple. I predict True" );
// console.log(string1 !== string2);

// //Test Using The Lower Case Function
// let firstcode: string = 'Hello World';

// console.log("Test for lower case: 'hello world. I predict true");
// console.log(firstcode.toLowerCase() === 'hello wolrd');

// // Test Using The Lower Case Function
// let firstCode: string = 'Hello World';

// console.log("Test for lower case: 'hello world'. I predict true.");
// console.log(firstCode.toLowerCase() === 'hello world');

//Numerical test
let num1: number =10;
let num2: number =20;

console.log("Is the num1 is equal num2? I predict false");
console.log(num1 === num2);

console.log("Is num1 is greater than num2? I predict false");
console.log(num1 > num2);

console.log("Is num1 is less than num2? I predict true");
console.log(num1 < num2);

console.log("Inequality test for num1 and num2. I predict true");
console.log(num1 !== num2);

console.log("Greater than or equal to test for num1 and num2. I predict false");
console.log(num1 >= num2);

console.log("less than or equal to test for num1 and num2. I predict true");
console.log(num1 <= num2);

//// Tests using "and" and "or" operators
let Usama: boolean = true ;
let Ali: boolean = false ;

console.log("AND operator Test: true AND false. I predict false.");
console.log(Usama && Ali);

console.log("OR operator Test: true OR false. I predict true.");
console.log(Usama || Ali);

// Test whether an item is in an array
let fruits: string [] = ['apple', 'orange', 'banana'];

console.log("Array inclusion test: 'apple' in the array. I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("Array exclusion test: 'grape' not in the array. I predict True.");
console.log(fruits.includes('grape'));