// IIFE - Immediately-invoked function expression

var foo = "foo";

(function(bar){
    var foo = bar;
    console.log("Inside IIFE : ",foo);
})(foo);

console.log("Outside IIFE : ",foo)