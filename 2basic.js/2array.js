const Msheros = ["thor" , "ironman" , "hulk"  , "spiderman"]

const Dcheros = ["batman" , "superman" , "flash"]

// console.log(Msheros);
// console.log(Dcheros);

let allHeros = [...Msheros , ...Dcheros] // this will add all the element of 2 or more array in new array
// console.log(allHeros);

//we can also use concat function but it is only usefull for adding or appending 2 array

let newAllHeros = Msheros.concat(Dcheros)
console.log(newAllHeros);