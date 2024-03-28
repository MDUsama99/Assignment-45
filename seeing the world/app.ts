// Location list
let dreamtovisit: string[] = ["Pyramid of eygpt", "Monjo Daro", "Atlantis", "Rome", "Constantinopol"];
//sorted list
let sortedPlace: string[] = [...dreamtovisit].sort();
// print list
console.log("Original Order:");
console.log(dreamtovisit);
//print sorted place
console.log("\nAlphabatical Order");
console.log(sortedPlace);
// Show that your array is still in its original order by printing it.
console.log("\nOriginal Order (Sorted Order):");
console.log(dreamtovisit);
//reverse list
let reversePlace: string[] = [...dreamtovisit].sort().reverse();
//print reverse place
console.log("\nReverse Order");
console.log(reversePlace);
// Show that your array is still in its original order by printing it.
console.log("\nOriginal Order (after reverse Order):");
console.log(dreamtovisit);
//reverse the original list
dreamtovisit.reverse();
//now print the list and checking the list reverse or not
console.log("\nReversedlist:");
console.log(dreamtovisit);
dreamtovisit.reverse();
console.log("\nBack to Original form list:");
console.log(dreamtovisit);
//
dreamtovisit.sort();
console.log("\nBack to Alphabatical Order:");
console.log(dreamtovisit);
//print in reverse alphabatical order 
dreamtovisit.sort();
dreamtovisit.reverse();
console.log("\nReverse Alphabatical Order: ");
console.log(dreamtovisit);