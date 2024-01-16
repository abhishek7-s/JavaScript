
const buttons = document.querySelectorAll('.button')
const reset = document.querySelector('.reset')

const body = document.body

buttons.forEach(
    (btn)=>{
        btn.addEventListener('mouseover', (e)=>{
            console.log(e.target);
            body.style.backgroundColor = e.target.id
        })
    }
)

reset.addEventListener('click',(e)=>{
    console.log(e.target);
    body.style.backgroundColor = '#212121'
})