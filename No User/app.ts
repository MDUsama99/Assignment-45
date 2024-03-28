let username: string[] = ["admin", "usama", "ali", "badit", "abdul"];
//Checking if the list of users is not empty
if (username.length > 0) {
    //loop code to print greetings
    for (let i = 0; i < username.length; i++) {
        if (username[i] === "admin") {
            console.log("Hello Admin ! would you like to see status report?");
        }    else {
                console.log(`Hello ${username[i]}! thanks for logging again.`);
            }
    }
}

//Remove all username
username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}