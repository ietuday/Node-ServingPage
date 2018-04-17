// The inner function can access the variables from the outer scope even after the outer
// function has returned. This is because the variables are still bound in the inner function and not dependent on the
// outer function.

function outerFunction(args){
    var variableInOuterFunction = args;

    return function(){
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction('hello closure!');

//Outer Function has returned.
innerFunction();