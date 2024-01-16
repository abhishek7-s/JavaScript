
const Books = [
    {
        bookName : "one", prize : 197 , publish : 2004
    },
    {
        bookName : "two", prize : 245 , publish : 2004
    },
    {
        bookName : "Three", prize : 674 , publish : 2021
    },
    {
        bookName : "FOur", prize : 675 , publish : 2015
    },
    {
        bookName : "Five", prize : 487 , publish : 1999
    },
    {
        bookName : "Six", prize : 977 , publish : 2011
    },
    {
        bookName : "Seven", prize : 795 , publish : 1975
    },
    {
        bookName : "Eight", prize : 486 , publish : 2022
    }
]

let Sortbooks = Books.filter( (bk) => {
    // return bk.publish >= 2015
    return bk.publish >= 2015 && bk.prize >500
})

console.log(Sortbooks);