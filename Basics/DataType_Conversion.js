// Conversion of data-types into their respective types 

// Checking For the Number  

let score = "33" 
console.log(typeof score);
let ValueInNumber = Number(score)
console.log(typeof(ValueInNumber));
console.log(ValueInNumber);

// "33" ==> 33

// Checking For the string  

let score01 = "33abc" 
console.log(typeof score);
let ValueInNumber01 = Number(score01)
console.log(typeof ValueInNumber01);
console.log(ValueInNumber01);

// "33abc" ==> NaN (Not A Number)

// Checking For the Undefined 

let score02 = undefined 
console.log(typeof score02);
let ValueInNumber02 = Number(score02)
console.log(typeof(ValueInNumber02));
console.log(ValueInNumber02);

// undefined ==> NaN (Not a Number) 

// Checking For the NULL

let score03 = null 
console.log(typeof score03);
let ValueInNumber03 = Number(score03)
console.log(typeof(ValueInNumber03));
console.log(ValueInNumber03);

// null ==> 0 (Number)


// Checking For the Boolean Value ( 1, 0 ) 

let score04 = 1 
console.log(typeof score04);
let ValueInNumber04 = Boolean(score04)
console.log(typeof(ValueInNumber04));
console.log(ValueInNumber04);

// true => 1 & false => 0
// "" ==> False 
// "ZGOD" ==> True