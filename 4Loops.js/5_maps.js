const myNum = [1,2,3,4,5,6,7,8,9]

// const newNum = myNum.map( (no) => (no + 10) )
const newNum = myNum.map( (no) => no + 10).map(  (newno) => (newno * 10))
console.log(newNum);