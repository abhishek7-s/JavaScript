let userId;
let userUrl;
const submitBtn = document.querySelector('.subBtn')
const opImg = document.querySelector('.Profilepic')
const name = document.querySelector('#name')
const Username = document.querySelector('#Username')
const following = document.querySelector('#following')
const followers = document.querySelector('#followers')
const visitBtn = document.querySelector('.visit')


const card = document.querySelector('.output')


let data;


function getInfo() {
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', userUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            data = JSON.parse(this.responseText)
            console.log('Entered');

            opImg.innerHTML = `<img src="${data.avatar_url}" alt="ProfilePic">`
            name.innerText = `${data.name === null ? 'N/A' : data.name}`
            Username.innerText = `@${data.login}`
            followers.innerText = `Followers : ${data.followers}`
            following.innerText = `Followings : ${data.following}`
            visitBtn.innerHTML =`<input type="button" class="visitbtn" value="Visit Profile"  onclick="location.href = '${data.html_url}'" target="_blank"/>`
            
        }   
    }
    xhr.send();
}


submitBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    console.log('Submitted');
    userId = document.querySelector('.ip').value;
    userUrl = `https://api.github.com/users/${userId}`
    console.log(userUrl);
    getInfo();
    console.log(card);
    card.style.display = "flex"
})


