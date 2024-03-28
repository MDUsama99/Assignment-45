// Guest list
var myguest = ["Arif", "Usama", "Babar"];
console.log("Invitation 1:");
for (var _i = 0, myguest_1 = myguest; _i < myguest_1.length; _i++) {
    var guest = myguest_1[_i];
    console.log("Dear ".concat(guest, "! \n  You are invited to dinner. We would be honored to have your presence."));
}
//guest can't make it 
var guestnotcoming = "Arif";
var guestnotcomingindex = myguest.indexOf(guestnotcoming);
//Print statement gurst who can't make it
if (guestnotcomingindex !== -1) {
    console.log("".concat(guestnotcoming, " can't make it to Dinner"));
}
//Replace the guest who can't make to a new guest
var newguest = ("Munawar");
if (guestnotcomingindex !== -1) {
    myguest[guestnotcomingindex] = newguest;
}
//print new statement
console.log("Invitation 2:");
for (var _a = 0, myguest_2 = myguest; _a < myguest_2.length; _a++) {
    var guest = myguest_2[_a];
    console.log("Dear ".concat(guest, "! \n  You are invited to dinner. We would be honored to have your presence."));
}
//informing people that you found a bigger dinner table
console.log("Great news! \nWe found a bigger dinner table so I am inviting more guest");
//Adding a guest a the begining of list
myguest.unshift("Khurram");
//Adding a guest the middle of list
myguest.splice(Math.floor(myguest.length / 1), 0, "Mashood");
//Adding a new guest a the end of list
myguest.push("Mohsin");
//Print final statement
console.log("Final Invitation :");
for (var _b = 0, myguest_3 = myguest; _b < myguest_3.length; _b++) {
    var guest = myguest_3[_b];
    console.log("Dear ".concat(guest, "! \n  You are invited to dinner. We would be honored to have your presence."));
}
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I can invite only two people for dinner.");
// removing guest "Usama" from the list
var indexOfremoveguest = myguest.indexOf("Usama");
if (indexOfremoveguest !== -1) {
    myguest.splice(indexOfremoveguest, 1);
}
console.log("Updated Guest List:", myguest);
var removeguest = myguest.shift();
console.log("".concat(removeguest));
console.log(myguest);
//removing first 3 guest from the list
myguest.splice(0, 3);
console.log(myguest);
// adding 5 more list
myguest.push("Khurram", "Usama", "Munawar", "Mashood", "Babar");
console.log("Updated list:", myguest);
console.log("Unfortunatly The bigger dinner table is not available right now, So i can invited only two guest");
while (myguest.length > 2) {
    var removeguest_1 = myguest.pop();
    console.log("Sorry, ".concat(removeguest_1, ", we can't invite you to dinner"));
}
//print invitation to two remaining guest
console.log("\n".concat(myguest[0], " and ").concat(myguest[1], ", you are still invited to dinner"));
