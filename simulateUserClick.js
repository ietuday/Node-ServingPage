function longRunningOperation(callback){
    setTimeout(callback,3000);
}

function userClicked(){
    console.log('Starting Long Operation');
    longRunningOperation(function(){
        console.log('ending long operation');
    });
}

userClicked();

