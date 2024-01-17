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

            if (data.login === undefined) {
                card.style.display = "none"
            }
            else{
                opImg.innerHTML = `<img src="${data.avatar_url}" alt="ProfilePic">`
                name.innerText = `${data.name === null || data.name=== undefined ? 'N/A' : data.name}`
                Username.innerText = `@${data.login}`
                followers.innerText = `Followers : ${data.followers}`
                following.innerText = `Followings : ${data.following}`
                visitBtn.innerHTML =`<input type="button" class="visitbtn" value="Visit Profile"  onclick="location.href = '${data.html_url}'" target="_blank"/>`

                card.style.display = "flex"

            }
        }   
    }
    xhr.send();
}

// OR

function getByFetch(url) {
    
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log('Entered');

        if (data.login === undefined) {
            card.style.display = "none"
        }
        else{
            opImg.innerHTML = `<img src="${data.avatar_url}" alt="ProfilePic">`
            name.innerText = `${data.name === null || data.name=== undefined ? 'N/A' : data.name}`
            Username.innerText = `@${data.login}`
            followers.innerText = `Followers : ${data.followers}`
            following.innerText = `Followings : ${data.following}`
            visitBtn.innerHTML =`<input type="button" class="visitbtn" value="Visit Profile"  onclick="location.href = '${data.html_url}'" target="_blank"/>`

            card.style.display = "flex"
        }
    })
    .catch((err)=>{
        console.log('Error is' ,err);
    })

}



submitBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    console.log('Submitted');
    userId = document.querySelector('.ip').value;
    userUrl = `https://api.github.com/users/${userId}`
    if (userId === "") {
        // alert("Enter UserId")
        userId
        card.style.display = "none"
        userId = document.querySelector('.ip').placeholder = "Enter Id"
    }
    else{
        console.log(userUrl);
        // getInfo();
        getByFetch(userUrl)
        console.log(card);
        userId = document.querySelector('.ip').value = ""
        userId = document.querySelector('.ip').placeholder = "abhishek7-s"
    }
})