// Arrays :- Arrays is the collection of multiple items under a single variable name.

//  Arrays can be of similar and disimilar values

const myArr =[1,2,3,4,5,6]
const myArr1 =["JONNY" , "REGA", "MORTAL", "ZGOD"]
const myArr2 =[12, 13, 14, 15, 16 , "DYNAMO", true  ]


// console.log(myArr);

// console.log(myArr[3]);


//  Arrays Method 

myArr.push(100)
// console.log(myArr)

myArr.push(400)
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.unshift(9)
// console.log(myArr)

myArr.shift()
// console.log(myArr)


// <---------------------------------------  Slice & Splice ---------------------------------------------->
 

console.log("A" , myArr);      // Original Array 

const myn1 = myArr.slice(1, 4)
console.log(myn1);

console.log("B",myArr)              // Using of slice 

const myn2 = myArr.splice(1,4)       // Using of splice 
console.log("C", myArr);            
console.log(newArr1);