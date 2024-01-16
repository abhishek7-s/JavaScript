const myArr = [5 ,9 ,8 ,6 ,2]

// console.log(myArr);
// console.log(myArr[3]);


const newArr = new Array(4,8,6,7,"Abhishek" ,true)

// console.log(newArr)

// const Arr1 = newArr.join()   // this methon will copy the array in string datatype

// console.log(Arr1);


const testArr = [4,8,5,7,2,3]

//slice method

//  This method just return the slice element without changing or manipulating the OG Array
// And it does not include the end index 
console.log("1." , testArr);
console.log(testArr.slice(1, 4))  


//splice method

//  This method just return the slice element without changing or manipulating the OG Array
// And it does not include the end index 
console.log("2." , testArr);
console.log(testArr.splice(1,4));

console.log("This is the OG array after Splice method",testArr);