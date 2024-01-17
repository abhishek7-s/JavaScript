const task = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({name:'Abhishek' , age:19})
        } else {
            reject('Got Error')
        }
    },1000)
})

task.then((user)=>{
    console.log('worked');
    console.log('Name is ' ,user.name);
    console.log('age is' ,user.age);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Executed");
})



const task2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({name:'Avenue' , age:20})
        } else {
            reject('Error in Task 2')
        }
    },1000)
})

async function worked() {
    try {
        let response = await task2;
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

worked()




fetch('https://api.gitub.com/users/abhishek7-s' , 'GET')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data.name);
})
.catch((err)=>{
    console.log('Error is' ,err);
})