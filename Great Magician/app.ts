function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great"; 
    }
}

let magicians: string[] = ["Shin Lin", "Harry Potter", "Mark X hope"];

make_great(magicians);

show_magicians(magicians);
