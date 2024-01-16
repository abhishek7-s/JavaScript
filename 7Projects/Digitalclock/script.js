
const clock = document.querySelector('.timebox')


setInterval( function(){
    let newDate = new Date()
    // console.log(newDate.toLocaleTimeString());
    let currentTime = newDate.toLocaleTimeString();
    clock.innerText = currentTime
    document.querySelector('title').innerText = currentTime
    console.log('hi');
} , 1000)