let Myguest: string[] = ["Ghazanfer","Arif","Tabish"];
console.log("Original Invitations:");
for (let guest of Myguest) {
   console.log(`Dear ${guest}!\n I would like to invite you on dinner, we would be honored to have your presence.`);
}

// //One guest Unfortunately cannot come on dinner so we have to change the list

// // Original guest list
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Nelson Mandela"];

// // Print original invitations
// console.log("Original Invitations:");
// for (let guest of guestList) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
// }

let guestNotComingIndex = Myguest.indexOf("Tabish");
if (guestNotComingIndex !== -1) {
    Myguest[guestNotComingIndex] = "Munawar";  
}
console.log("\nUpdated Invitations:");
for (let guest of Myguest) {
    console.log(`Dear ${guest}!\n I would like to invite you on dinner, we would be honored to have your presence.`);
 }