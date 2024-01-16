// const mynum = [1,2,3,4,5]

// const totalNo = mynum.reduce( (acc , current ) => {
//     console.log(`Acc is ${acc} and Current No id ${current}`);
//     return acc + current
// }, 0)

// console.log(totalNo);


/*To add Price in shopping card*/

const CardInfo = [
    {
        name : "Mango",
        price : 45
    },
    {
        name : "Apple",
        price : 64
    },
    {
        name : "kiwi",
        price : 97
    },
    {
        name : "santara",
        price : 68
    },
    {
        name : "kela",
        price : 31
    },
    {
        name : "chiku",
        price : 84
    },
    {
        name : "pineapple",
        price : 48
    },
    {
        name : "Vadapav",
        price : 68
    },
    {
        name : "Shev",
        price : 75
    }
]

const TotalPrice = CardInfo.reduce( (acc , item) =>(acc + item.price) , 0)

console.log(TotalPrice);


/*Same by using Loops */

let totalpriceByLoop = 0;

for (let i = 0; i < CardInfo.length; i++) {
    const ele = CardInfo[i].price;
    totalpriceByLoop = totalpriceByLoop + ele 
}

console.log(totalpriceByLoop);