/*
There are two types of scopes 
    ---> Global Scope
    ---> Local Scope 
*/

// # Global Scope :- Global Scope Variables are that variables which are visibal to everyone throught the program 

// # Local Scope :- Local scope is a characteristic of variables that makes them local (i.e., the variable name is only bound to its value within a scope which is not the global scope).

var a = 100 // This is the Global Variable
let c = 300

if(true){
    let a = 10
    const b = 3
    console.log("INNER :" , a)
}


console.log(a);
// console.log(b); b will not print beacuse it is not define within the scope , i.e it is local scope variable 
console.log(c); 