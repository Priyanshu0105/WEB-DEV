const accountId = 14453
let accountEmail = "priyanshu41619@gmail.com"
var accountPass = "112233"
accountCity = "Delhi"
let accountState; // undefined

// accountId = 413 // not allowed
/*

prefer not to use var because of scope problem
*/

console.log(accountId);

console.table([accountEmail,accountId , accountPass , accountCity , accountState ])