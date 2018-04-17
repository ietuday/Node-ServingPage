// The reason for having an immediately executing function is to create a new variable scope. An if, else, or while
// does not create a new variable scope in JavaScript.

var foo = 123;
if(true){
    var foo = 456;
}

console.log(foo);
