var username = ["admin", "usama", "ali", "badit", "abdul"];
if (username.length > 0) {
    for (var i = 0; i < username.length; i++) {
        if (username[i] === "admin") {
            console.log("Hello Admin ! would you like to see status report?");
        }
        else {
            console.log("Hello ".concat(username[i], "! thanks for logging again."));
        }
    }
}
//Remove all username
username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}
