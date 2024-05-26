const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexcolors = "#";
    for(let i=0; i<6; i++){
        hexcolors = hexcolors + hex[RandomeNumber()]
    }
    color.textContent = hexcolors;
    document.body.style.backgroundColor = hexcolors;
})

function RandomeNumber(){
    return  Math.floor(Math.random()*hex.length);
}
