const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

let conterValue = 0;
btns.forEach(btn => {
    btn.addEventListener("click", function(){
        if (btn.classList.contains("increase")){
            conterValue = conterValue + 1;
        }
        else if (btn.classList.contains("decrease")){
            conterValue = conterValue - 1;
        }
        else if (btn.classList.contains("reset")) {
            conterValue = 0;
        }f
        value.textContent = conterValue;
    });
})
