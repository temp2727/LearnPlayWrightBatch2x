//Classify triangle by the length of its sides.

let a = 3, b = 4, c = 5;
if (a === b && a == c) {
    console.log("Equilateral Triangle");
} else if (a === b || a === c || b === c) {
    console.log("Isosceles Triangle");
} else if (a !== b || a !== c) {
    console.log("Scalene Triangle");
} else {
    console.log("Is it a triangle ?")
}

//✅ FizzBuzz Test:
//Write a program that prints numbers from 1 to 100. However, for multiples of 3, print "Fizz" instead of the number,
//  and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}