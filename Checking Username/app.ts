let username: string[] = ["admin", "usama", "abdul", "basit", "ali"];
let newusername: string[] = ["faiz","usama", "ali", "tabish", "wahab"];

for (let i = 0; i < newusername.length; i++) {
    if (username.indexOf(newusername[i]) !== -1) {
        console.log(`Sorry! ${newusername[i]} is not available. Enter a new user name.`);
    } else {
        console.log(`Congratulation! ${newusername[i]} is avalable.`);
    }
}
