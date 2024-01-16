const userInfo = {
    name :"Abhishek",
    Age : 19,
    class : "SE" ,
    email : "abhishel@gmail.com",
    isLoggedIn : false
}

// console.log(userInfo.class);
// console.log(userInfo["class"]);


// we can also store symbol in the object

const mySym = Symbol("This is Symbol")

const newUserInfo = {
    name :"Abhishek",
    [mySym] : "MySymbol",   //syntax for symbol
    Age : 19,
    class : "SE" ,
    email : "abhishel@gmail.com",
    isLoggedIn : false
}

// console.log(newUserInfo);
// console.log(newUserInfo[mySym]);


// newUserInfo.email = "abhisheksharma@gmail.com"

// Object.freeze(newUserInfo)
// The object gets locked now there will be no change if we try to change any key value

// newUserInfo.email = "abhisheksharma@Hello.com"
// console.log(newUserInfo);

newUserInfo.Sayhello = function () {
    console.log(` Hello ${this.name} welcome `);
}

// console.log(newUserInfo.Sayhello);
// console.log(newUserInfo.Sayhello());





/*  De Stucture  */

const course = {
    name : "Javascript by AS",
    price: 999,
    instructor : "Abhishek"
}

// console.log(course.name);  

// const {name} = course;  // we can also use this syntax of De structuring
const {name : naam} = course;  

// console.log(name)
// console.log(naam)