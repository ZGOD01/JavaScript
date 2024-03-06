const fireConstainer  = document.createElement("div");
fireConstainer.className = "fire-container";
document.body.appendChild(fireConstainer);

document.addEventListener("mousemove" , function(event){
    createFire(event.clientX,event.clientY);
});


function createFire(x,y){
    const fire = document.createElement("div");
    fire.className = "fire";
    fire.style.left = x + "px";
    fire.style.top = y + "px";
    fireConstainer.appendChild(fire);

    setTimeout(()=>{
        fire.remove();
    },1000);
}