const accountId= 123
let accountEmail = "abc@gmail.com"
var accountPassword = "12323"
accountCity="Delhi"

// accountId= 2 (not allowed as it is const so can't change it)
// console.log(accountId);

accountEmail = "amda@gamil.com"
accountPassword = "131334"
accountCity = "Tokyo"
//so from here we can see that we can update let and var and without variable
// console.log(accountEmail)
// console.log(accountPassword) 
// console.log(accountCity)

// to get all together in table form 
//  (index) │ Values           │
//├─────────┼──────────────────┤
//│ 0       │ 'amda@gamil.com' │
//│ 1       │ '131334'         │
//│ 2       │ 'Tokyo'    
console.table([accountEmail, accountPassword,accountCity])

// then why we have 2 variable types let and var 
// if both can be changed and also it works without variable as well

/*we don't use var nowadays because because var had "no idea of scope" no idea of block scope
 if we made multiple variable with same name then it got changed for all and it caused issues if 
 it is password or sensitive data */

 let accountState;
console.table([accountState, accountEmail, accountPassword,accountCity])
//  0 (index)      │ undefined  (value) as we don't put value in the accountState so it shows undefined