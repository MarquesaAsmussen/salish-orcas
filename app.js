function getUserName(){
    let userName = prompt('Please Enter Your Name');
    document.write('Welcome ' + userName + '!')
    return userName;
}

let userName = getUserName()
console.log(userName)

function doYouLikeOrcas(){
    let likeOrcas = prompt('Do you like orcas?');
    if(likeOrcas == 'yes'){
        document.write('Wonderful, we do too!')
    } else {
        document.write("That's so sad!")
    }
}

doYouLikeOrcas();

function wantToGetUpdates(){
    let receiveUpdates = prompt('Would you like to receive updates from Salish Orcas?');
    if(receiveUpdates == 'yes'){
        document.write('Please call us to setup an account')
    } else {
        document.write('Ok')
    }
}

wantToGetUpdates();