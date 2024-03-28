// Guest list
let myguest: string[] = ["Arif","Usama","Babar"];
console.log("Invitation 1:");
for (let guest of myguest) {
    console.log(`Dear ${guest}! \n  You are invited to dinner. We would be honored to have your presence.`);
}

//guest can't make it 
let guestnotcoming = "Arif";
let guestnotcomingindex = myguest.indexOf(guestnotcoming);

//Print statement gurst who can't make it
if (guestnotcomingindex  !== -1) {
    console.log(`${guestnotcoming} can't make it to Dinner`)
}

//Replace the guest who can't make to a new guest

let newguest = ("Munawar");
if (guestnotcomingindex !== -1) {
    myguest[guestnotcomingindex] = newguest;
}
//print new statement
console.log("Invitation 2:");
for (let guest of myguest) {
    console.log(`Dear ${guest}! \n  You are invited to dinner. We would be honored to have your presence.`);
}
//informing people that you found a bigger dinner table
console.log(`Great news! \nWe found a bigger dinner table so I am inviting more guest`)
//Adding a guest a the begining of list
myguest.unshift("Khurram");
//Adding a guest the middle of list
myguest.splice(Math.floor(myguest.length / 1),0, "Mashood");
//Adding a new guest a the end of list
myguest.push("Mohsin");
//Print final statement
console.log("Final Invitation :");
for (let guest of myguest) {
    console.log(`Dear ${guest}! \n  You are invited to dinner. We would be honored to have your presence.`);
}

