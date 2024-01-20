class user{
    constructor(username , email , password){
        this.username =username
        this.email = email
        this.password = password
    }
    loggedIn() {
        console.log(`${this.username} Logged In`);
    }
}



class seller extends user{
    constructor(username,email,password , role){
        super(username,email,password)
        this.role = role
    }
    printinfo(){
        console.log(this.username);
        console.log(this);
    }

}
const abhi = new user('Abhi' , 'abhi@google.com' , 1523)
const DJ = new user('DJ' , 'dafsasf@google.com' , 9764)

// abhi.loggedIn()
// DJ.loggedIn()

const admin = new seller('abhishek','abhishek@gmail.com',123,'Owner')
const admin2 = new seller('Avenue','abhishek@gmail.com',123,'ADMIN')

admin.printinfo()
admin2.printinfo()