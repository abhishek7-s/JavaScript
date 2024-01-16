function addtwo(num1 ,num2 ) {
    return num1 + num2
}

// console.log(add2(9,4));


function sub2(num1,num2){
    return num1 - num2
}
// console.log(sub2(5,4))
// console.log(sub2( ))   // this will return NaN becz we have not passed any argument





/* Hoisting */


console.log(add1(9));  // this will work ✅
// we can call function before declaration of that function it will work ,when we declare it with the following 

function add1(num) {
    return num+1
}



// console.log(add2(4)) // this will not work ❌
/* NOTE */
// this will give error becz when we declare the function with the following methon or syntax we cannot use or call that function before declaration of that fuction

const add2 = function(num){
    return num + 2
}
console.log(add2(4)) // this will work ✅

