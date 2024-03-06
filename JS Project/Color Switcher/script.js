let redbox = document.querySelector('.red');
let greenbox = document.querySelector('.green');
let bluebox = document.querySelector('.blue');
let yellowbox = document.querySelector('.yellow');
let cont = document.querySelector('.container');


redbox.addEventListener('click',()=>{
    console.log(cont.style.background);
    document.body.style.backgroundColor="red";
});
greenbox.addEventListener('click',()=>{
    document.body.style.backgroundColor="green";
});
bluebox.addEventListener('click',()=>{
    document.body.style.backgroundColor="blue";
});
yellowbox.addEventListener('click',()=>{
    document.body.style.background="yellow";
});
