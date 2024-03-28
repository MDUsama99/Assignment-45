// Function to display magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to add "The Great" to each magician's name and return the modified array
function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians[i] = magicians[i] + " The Great"; // Added a space before "The Great"
    }
    return modifiedMagicians;
}

// Define an array of magician names
let magicians: string[] = ["Shin lin", "Harry Potter", "MArk X hope"];

// Create a copy of the original array
let originalMagicians: string[] = [...magicians];

// Call the make_great function with the copy of the array to modify the magician names
let modifiedMagicians: string[] = make_great([...magicians]);

// Call the show_magicians function with both arrays to display the original and modified magician names
console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
