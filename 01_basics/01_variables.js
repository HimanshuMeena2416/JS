const accountId = 144553;
let accountEmail = "abc@gmail.com"; //used now
var accountPassword = "12345";
accountCity = "Udaipur";
let accountState;
//accountId = 2;    //Not allowed

accountEmail = "abcd@gmail.com";
accountPassword = "54321";
accountCity = "Dungarpur";

//prefer not to use var because of block scope and functional score

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountEmail, accountId, accountPassword, accountCity]);
console.log(accountState);