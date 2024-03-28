var username = ["admin", "usama", "abdul", "basit", "ali"];
var newusername = ["faiz", "usama", "ali", "tabish", "wahab"];
for (var i = 0; i < newusername.length; i++) {
    if (username.indexOf(newusername[i]) !== -1) {
        console.log("Sorry! ".concat(newusername[i], " is not available. Enter a new user name."));
    }
    else {
        console.log("Congratulation! ".concat(newusername[i], " is avalable."));
    }
}
