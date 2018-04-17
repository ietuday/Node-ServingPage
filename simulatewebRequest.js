function longRunningOperation(callback){
    //Simulate a 3 second operation
    setTimeout(callback, 3000);
}

function webRequest(request){
    console.log('Starting a long operation for Request : ',request.id);
    longRunningOperation(function(){
        console.log('Ending a long running operation for request : ',request.id);
    });
}

webRequest({id: 1});
webRequest({id:2});