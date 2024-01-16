
const score = 552

const balance = new Number(594.455)

// console.log(score)
// console.log(balance)

// console.log(balance.toLocaleString('en-IN'))
// console.log(balance.toPrecision(4))

/*  Maths */

const hundred = 5952.155 

// console.log(Math.ceil(hundred))

// console.log(Math.random())  // this will returm number randamly from 0-1 

// console.log(Math.round((Math.random() *10 )+ 1)) 


const min = 1
const max = 6

const bot = Math.floor(Math.random() * (max - min + 1) + min)

const user = 5

if(bot == user){
    console.log("Same")
}
else{
    console.log("Not Same")
}