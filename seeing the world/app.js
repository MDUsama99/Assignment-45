var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Location list
var dreamtovisit = ["Pyramid of eygpt", "Monjo Daro", "Atlantis", "Rome", "Constantinopol"];
//sorted list
var sortedPlace = __spreadArray([], dreamtovisit, true).sort();
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
var reversePlace = __spreadArray([], dreamtovisit, true).sort().reverse();
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
