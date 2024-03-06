//  Some Simple Comparision are :- 

console.log(2  > 1);
console.log(2  >= 1);
console.log(2  < 1);
console.log(2  <= 1);
console.log(2  == 1);
console.log(2  != 1);

//  Problematic comparision :-
    // --> In this the Js Atomatically Convert the DataType :- 

console.log("2" > 1); 
console.log("02" > 1);

// In the above EX. we can see that the No. 2 is the Number type DataType which is atomatically converted into the the  number 

console.log(null > 0 )
console.log(null == 0 )
console.log(null >= 0 )

// The reason is that an equality check == and > < >= <= works different.
//  Comparison convert null to number , treating it as 0. 
// That's why 3). null >= 0 is true and 1). null > 0 is false 

console.log(undefined == 0 );
console.log(undefined > 0 );
console.log(undefined < 0 );

//  Strictly Check(===)

// It required the same datatype for comparison 

console.log("2" === 2 );