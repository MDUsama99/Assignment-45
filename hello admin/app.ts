let username: string[] = ["admin", "usama", "basit", "abdul", "ali"];


for (let i = 0; i < username.length; i++) {
    if(username[i] === "admin") {
        console.log("Hello admin! Would you like to see the status report?");
    } else {
         console.log(`Hello ${username[i]}, thanks for logging again.`);
    }
}