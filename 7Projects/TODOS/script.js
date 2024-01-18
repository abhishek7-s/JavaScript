const input = document.querySelector('.ipBtn')
const add = document.querySelector('.addBtn')
const ul = document.querySelector('.todos')
const li = document.querySelector('li')
let tasks;
let done;

function addLi() {
    add.addEventListener('click',(e)=>{
        if (input.value ==="") {
            input.style.border = " 2px solid red"
            info.innerText = 'Enter Tasks'
        }
        else{
            info.innerText = 'Click the CheckBox to remove the task when it is done'
            input.style.border = " 2px solid green"
            tasks = document.createElement('li')
            tasks.innerHTML = `<input type="checkbox" name="Done" id="checkDone" class="checkDone"> ${input.value}`
            input.value = ''
            ul.appendChild(tasks)
            done = document.querySelector('#checkDone');
        }
    })
}

function removeLi() {
    ul.addEventListener('click', (e)=>{
        setTimeout(()=>{
            console.log(e.target);
            if(e.target.className == 'checkDone'){
                e.target.parentElement.remove(tasks)
            }
        },200)
    })
}


addLi()
removeLi()


const info = document.querySelector('#info')
