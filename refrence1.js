var foo = {bas : 123};
var bar = foo;

bar.bas = 456;
console.log(foo);
console.log(bar);