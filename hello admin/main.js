// Array of Usernames
var usernames = ["admin", "Alice", "Bob", "Charlie", "David"];
// Loop through the array and print greetings
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
