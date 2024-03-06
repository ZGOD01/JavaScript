/*  Following are some arithemetic operation :- 
    --> Addition (+)
    --> Substraction (-)
    --> Multiplication (*)
    --> Division (/)
    --> Remainder(%)
    --> Raised to Power (**)
*/

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);


//  Concatination Of Two String :- 

let str1 = "Hello"

let str2 = " ZGOD"

console.log(str1 + str2);


//  Problems Facing during string to number conversion :- 

//  Some Premitives are declare to solve such a problems 

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//  Refer the the given link below for more clarification  :- 

// https://tc39.es/ecma262/multipage/abstract-operations.html


/* Increment (++)
    --> Prefix operator 
    --> Postfix operator
*/

let x = 3;
const y = x++;

console.log({x},{y});

let a = 3;
const b = ++a;

console.log({a} , {b});
