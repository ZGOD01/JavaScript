


/*                                                Memory
                                                    |
            ----------------------------------------------------------------------------
            |                                                                          |
            V                                                                          V
          Stack                                                                       Heap
(Used in Primitive DataTypes)                                             (Used in Non-Primitive DataTypes)
*/

//  Stack

// The Data Store in the Original Value doesn't change ; it get replicated 

let myYoutubename = "zgodGaming"

let anotherName = myYoutubename

anotherName = "JonathanGaming"

console.log(myYoutubename);
console.log(anotherName);



// Heap 

// The Data Store in Original Value get change ; i.e the change done  by the user are donein the original value 

let UserOne = {
  email : "user@google.com",
  upi : "user@ybl"
}

let UserTwo = UserOne

UserTwo.email = "zgod001@google.com"

console.log(UserOne.email);
console.log(UserTwo.email);