var Myguest = ["Ghazanfer", "Arif", "Tabish"];
console.log("Original Invitations:");
for (var _i = 0, Myguest_1 = Myguest; _i < Myguest_1.length; _i++) {
    var guest = Myguest_1[_i];
    console.log("Dear ".concat(guest, "!\n I would like to invite you on dinner, we would be honored to have your presence."));
}
// //One guest Unfortunately cannot come on dinner so we have to change the list
// // Original guest list
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Nelson Mandela"];
// // Print original invitations
// console.log("Original Invitations:");
// for (let guest of guestList) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
// }
var guestNotComingIndex = Myguest.indexOf("Tabish");
if (guestNotComingIndex !== -1) {
    Myguest[guestNotComingIndex] = "Munawar";
}
console.log("\nUpdated Invitations:");
for (var _a = 0, Myguest_2 = Myguest; _a < Myguest_2.length; _a++) {
    var guest = Myguest_2[_a];
    console.log("Dear ".concat(guest, "!\n I would like to invite you on dinner, we would be honored to have your presence."));
}
