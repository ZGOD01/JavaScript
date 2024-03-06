// Strings are useful for holding data that can be represented in text form .

//  Repersentation of String 

const name =  "ZGOD"

const repoCount = 50 

console.log(name + repoCount + "Value "); // This representation is confusing 

console.log(`Hello, my name is ${name} and my repoCount is ${repoCount}`);

const gameName ="Zgod-Gaming"

console.log(gameName[1]);


// Method of String :- 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf(3));


console.log(gameName.slice(-5,3));

const newString = gameName.substring(0,2)

console.log(newString)


const newStringone = "   Torus   "
console.log(newStringone);
console.log(newStringone.trim());


const url = "http://pgmoze.com/clg%20wagholi"

console.log(url.replace('%20', "-"));
console.log(url.includes('pgmoze'));
console.log(url.includes('Jay_shree_ram'));