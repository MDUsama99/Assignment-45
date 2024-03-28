var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to display magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to add "The Great" to each magician's name and return the modified array
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians[i] = magicians[i] + " The Great"; // Added a space before "The Great"
    }
    return modifiedMagicians;
}
// Define an array of magician names
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Create a copy of the original array
var originalMagicians = __spreadArray([], magicians, true);
// Call the make_great function with the copy of the array to modify the magician names
var modifiedMagicians = make_great(__spreadArray([], magicians, true));
// Call the show_magicians function with both arrays to display the original and modified magician names
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
