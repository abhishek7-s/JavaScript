let score = 26

let stringScore = String(score)

// score is converted into string similarly we can convert any datatype in anothor datatype 
// but we have to check its type becouse JS convert the datatype without any checking 
// so sometime value will return NaN ,etc

// console.log(typeof score)    
// console.log(typeof stringScore)

let isLoggedIn = true
let NumisLoggedIn  = Number(isLoggedIn)

console.log(typeof isLoggedIn)
console.log(typeof NumisLoggedIn)
console.log(NumisLoggedIn)

/*  Boolean value by number 
    1 => true
    0 => false
*/




/*

There are 2 types of datatype
1. Primitive datatype:-
    1. String
    2. Number
    3. Boolean      (true / false)
    4. null         (iska matlab hai empty or zero nahi hai)
    5. undefined    (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
    6. Symbol       (kisi bhi value ko unique banane ke liye use kiya jata hai)
    7. BigInt       (jo badi values hoti hai oo hum BigInt mein use karte hai)

2. Preference datatype (Non Primitive datatype)
    1. Array    ( [ ] )
    2. Object   ( { } )
    3. Function ( function( ){ } )

*/


/*
    Primitive datatype are stored in stack
    Non-Primitive datatype are stored in Heap 

*/
