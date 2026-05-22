let a = 10;
console.log(++a + a);
console.log(a);

let b = 10;
console.log(b++ + ++b);
console.log(b);

let c = 10;
console.log(++c + ++c);
console.log(c);

let d = 5;
console.log(d++ + ++d - --d + d-- + ++d); //5+7-6+6+6
console.log(d);