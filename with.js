var obj = {
    a: 2,
    b: 3,
    c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with(obj){
    a = b + c;
    d = b - a;
    d = 3;
    console.log("a : ",a);
    console.log("b : ",b);
    console.log("c : ",c);
}

console.log(obj.d);
console.log(d);
