function wantToGetUpdates(){
    let receiveUpdates = prompt('Would you like to receive updates from Salish Orcas?');
    if(receiveUpdates == 'yes'){
        document.write('Please call us to setup an account')
    } else {
        document.write('Ok')
    }
}

wantToGetUpdates();
