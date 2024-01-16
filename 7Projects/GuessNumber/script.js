
const submit = document.querySelector('.submitBtn')
const userIp = document.querySelector('.iptext')
const lastG = document.querySelector('.prevG')
const Result = document.querySelector('.prev')
const remChange = document.querySelector('.remChange')
const history = document.querySelector('.prevArray')
const ans = document.querySelector('.ans')


const p = document.createElement('p')

let prevArray = [];
let noChange = 0;

let playGame = true;

let randomNo = Math.round((Math.random()*100) + 1)

if (playGame) {
    // console.log(randomNo);
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        let newNo = parseInt(userIp.value)
        console.log(newNo);
        console.log(validity(newNo));
    })

}

function validity(guess) {
    let validNo;
    // will check the Number is valid or not
    if(guess > 0 && guess < 101){
        validNo = true;
        noChange++;
    }
    else{
        alert('Invalid Value')
        validNo = false
    } 
    
    if (validNo) {
        console.log(noChange);
        if (noChange === 10) {
            displayM(`The Random Number was ${randomNo}`)
            alert('You are Out of changes')
            endGame();
        }
        else{
            prevArray.push(guess)
            stats(guess)
            Check(guess)
        }
    }

}

function Check(guess){
    // console.log(`Check Func ${guess} ${randomNo}`);

    if (guess === randomNo) {
        console.log('You guess the right Number');
        displayM("You guess the right Number")
        document.body.style.backgroundColor = 'black'
        endGame();
    }
    else if (guess > randomNo) {
        displayM("Guess is To high")
    }
    else{
        displayM("Guess is To Low")
    }
   
}


function stats(guess) {
    userIp.value= '';
    lastG.innerHTML = `${guess}`
    remChange.innerHTML = `${10 - noChange}`
    history.innerHTML = `${prevArray}`
}

function displayM(message) {
    ans.innerHTML = `<h3>${message}</h3>`
}

function startNew() {
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('click', function(e){
        document.body.style.backgroundColor = '#212121'
        randomNo = Math.round((Math.random()*100) + 1)
        prevArray = []
        noChange = 0;
        ans.innerHTML = ""
        lastG.innerHTML = ``
        history.innerHTML = `${prevArray}`
        remChange.innerHTML = `${10 - noChange}`
        userIp.removeAttribute('disabled','')
        Result.removeChild(p)
        playGame = true
    })
}

function endGame() {
    noChange = 0;
    userIp.value= '';
    userIp.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id ="newGame"> Start New </h2>'
    Result.appendChild(p)
    playGame = false
    startNew()
}