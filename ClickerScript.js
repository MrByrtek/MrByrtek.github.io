let button = document.querySelector("#click")
let pointDisplay = document.querySelector("#points")
let passiveDisplay = document.querySelector("#passive")
let pointsAll = document.querySelector("#pointsall")
let openshop = document.querySelector("#openShop")

let points = 0;
let passive = 0;

let upgrades = [];
let upgradesCost = [];
upgrades[0] = document.querySelector("#upgrade1")
upgradesCost[0] = 5

pointDisplay.innerHTML = points;
passiveDisplay.innerHTML = passive;

function show() {
    pointDisplay.innerHTML = points.toFixed(1);
    passiveDisplay.innerHTML = passive.toFixed(1);
}

button.addEventListener("click", function () {
    points++;
    pointsAll.classList.add("animation");
    setTimeout(function () {
        pointsAll.classList.remove("animation")
    }, 150)
    show();
})

let increment = [];
increment[0] = 1;

upgrades[0].addEventListener("click", function () {
    if (points >= upgradesCost[0]) {
        points -= upgradesCost[0];
        passive += 0.1;
        upgradesCost[0] += increment[0]
        increment[0]*2;
    }
    show();
})

setInterval(function () {
    points += passive / 100;
    show();
}, 10)
let openClosed = true
openshop.addEventListener("click", function () {
    let shopDisplay = document.querySelector("#sklep");
    if (openClosed) {
        openshop.innerHTML = "Zamknij sklep"
        shopDisplay.style.setProperty("height", "100%");
        shopDisplay.style.setProperty("display", "block");
        openClosed = false;
    }
    else{
        openshop.innerHTML = "Otworz sklep"
        shopDisplay.style.setProperty("height", "0px");
        shopDisplay.style.setProperty("display", "none")
        openClosed = true;
    }
})
