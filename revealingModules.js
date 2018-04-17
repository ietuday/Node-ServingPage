function printableMessage(){
    var message = 'hello';

    function setMessage(newMessage){
        if(!newMessage) throw new Error('cannot set empty message');
        message = newMessage;
    }

    function getMessage(){
        return message;
    }

    function printMessage(){
        console.log(message);
    }

    return {
        setMessage: setMessage,
        getMessage: getMessage,
        printMessage: printMessage
    };

}

var awsome1 = new printableMessage();
awsome1.printMessage();

var awsome2 = new printableMessage();
awsome2.setMessage('hi');
awsome2.printMessage();

awsome1.printMessage();
