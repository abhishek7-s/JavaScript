// console.log(1);
// setTimeout(()=>(console.log(2)) , 0 )
// console.log(3);
// console.log(4);


// function DisplayName() {
//     document.querySelector('h1').innerText = 'Abhishek'
// }

// setTimeout( DisplayName , 2000 )


// const nameArr = document.querySelector('.nameArray')
// const start = document.querySelector('.start')
// const stop = document.querySelector('.stop')
// let i = 0;
// console.log(start);

// let names = ['Abhishek' , 'FrontEnd Dev', 'Learning' , 'Welcome','Memes','Clg']
// let colors = ['grey' , 'pink', 'blue' , 'cyan','yellow','red','green']
// let interval;
// let bginterval;
// function changer() {
//     interval = setInterval(()=>{
//         if (i<names.length) {
//             nameArr.innerHTML = `<h1>${names[i]}</h1>`
//             i++;
//         }
//         else{
//             i=0
//         }
//     } , 1000)
// }


// function Bgchanger() {
//     bginterval = setInterval(()=>{
//         if (i<names.length) {
//             document.body.style.backgroundColor = colors[i]
//             i++;
//         }
//         else{
//             i=0
//         }
        
//     } , 1000)
// }
  


// start.addEventListener('click',(e)=>{
//     changer()
//     Bgchanger()
//     console.log("Started");
    
// })


const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
let interval;
let bginterval;

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16 )]
    }
    console.log(color);
    document.body.style.backgroundColor = color
    return color
}

start.addEventListener('click' , (e)=>{
    console.log("Started");
    bginterval = setInterval(()=>{
        randomColor()
    } ,800)
})
stop.addEventListener('click' , (e)=>{
    console.log("Stopped");
    // clearInterval(interval)
    clearInterval(bginterval)
    bginterval = null
})


function getRGBA(){ 
    let random1 = Math.floor(Math.random() * 255); 
    let random2 = Math.floor(Math.random() * 255); 
    let random3 = Math.floor(Math.random() * 255); 
    return `rgba(${random1},${random2},${random3})`; 
    
}
document.body.style.backgroundColor = getRGBA()
console.log(getRGBA());