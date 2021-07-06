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

function wantToGetUpdates(){
    let receiveUpdates = prompt('Would you like to receive updates from Salish Orcas?');
    if(receiveUpdates == 'yes'){
        document.write('Please call us to setup an account')
    } else {
        document.write('Ok')
    }
}

function guessingGame(){
    let correctAnswer = 42;
    let numberOfGuesses = 5;
    for(let i = 0; i < numberOfGuesses; i++){
        console.log(i);
        let userAnswer = prompt('Please enter a number between 1 - 100');
        while(userAnswer <= 0 || userAnswer > 100){
            userAnswer = prompt('Please enter a number between 1 - 100');
            console.log('User Guess: ' + userAnswer)
        }
        document.write('<h4>'+userAnswer+'</h4>')
        if(userAnswer == correctAnswer){
            alert('Ah, yes, 42. The answer to Life, the Universe, and Everything. Well done, you nerd!');
            break;
        } else if (userAnswer < correctAnswer){
            alert('little bit higher, now.');
        }else if (userAnswer > correctAnswer){
            alert('little bit lower, now');
        } else {
            alert('Hmm, something is not right!');
        }
        }
    }
