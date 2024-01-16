/*  
calciula: weight (kg) / [height (m)]2

The calciula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.

*/


const output = document.querySelector('.output')
const form = document.querySelector('form')

function calculateBMI(h , w) {
    let height = h/100
    const result = w / Math.pow(height,2)
    console.log(result.toFixed(2));
    output.innerText = `BMI = ${result.toFixed(2)}`
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(height);
    console.log(weight);


    if(height === '' || height < 0 || isNaN(height)) {
        output.innerHTML = `Enter valid height`;
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        output.innerHTML = `Enter valid weight`;
    } 
    else {
        calculateBMI(height , weight)
    }
    
})

form.addEventListener('reset' , (e)=>{
    output.innerText = ``
})


/* *****   OR ***** */


// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('.output')


//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Enter valid height`;
//   } 
//   else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Enter valid weight`;
//   } 
//   else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerText = `BMI = ${bmi}`
//   }
// });


const reset = document.querySelector('#reset')
reset