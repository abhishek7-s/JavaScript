/* Immediately Invoked Function Expressions IIFE */

// ()() 
/*
    this is IIFE where the first () contains function it can be normal function or arrow function
    and the second () is the normal one which we use when we execute any function eg. add() |
    we can pass argument on that ()
    we have to terminate this IIFE using " ; " after second ()
*/

(() => (console.log("Hello World")))();

((name) => (console.log(`Hello ${name}`)))("Abhishek");