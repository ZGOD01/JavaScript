// Object are define by two types :- 
    /* ----> Simgletom
       ----> Literals 
    */


    

//  <---------------------------------------------Literals-----------------------------------------------> 
 

const mySym = Symbol("GoatOverALL")

const myobj = {
    name: "Jonnay",
    "Long name " : "Jonathan Amaral",
    age: 19,
    [mySym]: "GoatOverALL",
    email: "jonathangaming@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday","Friday"]
}

console.log(myobj.email);
console.log(myobj.name);
console.log(myobj["Long name "]);

// console.log(myobj.mySym) ---> Symbol can be be display like this also but the Datatype Changes , so  it might causes problem in interviews Question 

console.log(myobj[mySym]) ; // This is the correct manner to display the symbol 
