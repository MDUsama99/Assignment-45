var username = ["admin", "usama", "basit", "abdul", "ali"];
for (var i = 0; i < username.length; i++) {
    if (username[i] === "admin") {
        console.log("Hello admin! Would you like to see the status report?");
    }
    else {
        console.log("Hello ".concat(username[i], ", thanks for logging again."));
    }
}
