function getUserName(){
    let userName = prompt('Please Enter Your Name');
    document.write('Welcome ' + userName + '!')
    return userName;
}

let userName = getUserName()
console.log(userName)
