function outerFunction(arg){
    var varibleInOuterFunction = arg;

    function bar(){
        console.log(varibleInOuterFunction);
    }

    bar();
}

outerFunction('hello closure');

