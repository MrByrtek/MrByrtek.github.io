let button = document.querySelector("#click")
let pointDisplay = document.querySelector("#points")
let passiveDisplay = document.querySelector("#passive")

let points = 0;
let passive = 0;
pointDisplay.innerHTML = points;
passiveDisplay.innerHTML = passive;

button.addEventListener("click", function(){
    points++;
    pointDisplay.innerHTML = points;
})

setInterval(function(){
    
})
