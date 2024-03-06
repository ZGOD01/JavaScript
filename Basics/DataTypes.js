/*
There are 7 Primitive Data Types :- 

    --> Number = Integer Value
    --> BigInt
    --> String =""
    --> Boolean = True/False
    --> Undefine 
    --> NULL = Standalone Value
    --> Symbol = Unique
    */
   
   let age = 21 
   let name = "ZGOD"
   let statement = true
   let state ; // undefine type 
   let check = null
   
   console.log(typeof  age);
   console.log(typeof name);
   console.log(typeof statement);
   console.log(typeof state);  
   console.log(typeof check); // By default the null is consider as Object


// Non-Primitive Data Type 

    // --> Array
    // --> Objects 
    // --> Functions

const arr = [ 1, 2, 3, 4, 5] // Arrays are define in square brackets 

const obj ={
    name : "Zgod" , 
    Age: 21 ,
    profession: "Frontend-Developer"
}


const myFun = function(){
    console.log("Hello , World !");
}