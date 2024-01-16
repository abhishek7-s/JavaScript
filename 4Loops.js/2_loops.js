/*  For of loops  */


// const arr =["hero","ironman","thor","Abhishek"]

// for (const count of arr) {
//     console.log(count);
// }

// const arr1 = "Hello World"

// for (const char of arr1) {
//     console.log(`Each char is ${char}`);
// }



/* Maps */

const map1 = new Map()

map1.set('In' , "India")
map1.set('Us' , "USA")
map1.set('Ne' , "NEPAL")
map1.set('Ru' , "RUSSIA")

console.log(map1);

//Printing using for of loops
for (const [key,value] of map1) {
    console.log(`${key} : ${value}`);
}