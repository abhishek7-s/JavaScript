
/* Syntax for If */
// if(Condition){

// }

/* Syntax for If-Else  */
// if (condition) {
// }
// else{
// }

/* Conditions or Comparision*/
// < , > , <= , >= , == , === ,!= 

/* Nested IF-else eg:- */

// let age = "ASd"

// if(age < 18){
//     console.log("You cannot apply for drive License");
// }
// else if(age >= 18){
//     console.log("You can apply for drive License");
// }
// else{
//     console.log("CAnt drive");
// }

// const isLoggedIn = true
// const debitcard = true

// if (isLoggedIn && debitcard) {
//     console.log("Can buy Item")
// }

// if (isLoggedIn || debitcard) {
//     console.log("Cannot buy Item")
// }



/* NOTE   */

//Falsy values
// false ,0 ,-0 ,BigInt 0n ,"", null , undefined,NaN

//Truthy Values
// "0", "False", " ", [], {}, function(){}


/* Nullish Coalescing Operator (??) : null undefined*/

// let val1;
// val1 = 7 ?? 15
// val1 = null ?? 15
// val1 = undefined ?? 15

// console.log(val1);


/* Terniary Operator  */
//syntax
// condition ? true : false

const price = 10
price >= 70 ? console.log("IS greater then 70") : console.log("LEss then 70");;