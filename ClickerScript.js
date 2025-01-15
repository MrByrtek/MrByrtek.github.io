let button = document.querySelector("#click")
let pointDisplay = document.querySelector("#points")
let passiveDisplay = document.querySelector("#passive")
let passiveGainDisplay = document.querySelector("#passiveGain")
let pointsAll = document.querySelector("#pointsall")
let openshop = document.querySelector("#openShop")

let points = 0;
let passive = 0;
let clickstrength = 1;
let passiveGain = 0.1;

let upgrades = [];
let upgradesCost = [];
let increment = [];

pointDisplay.innerHTML = points;
passiveDisplay.innerHTML = passive;

function show() {
    pointDisplay.innerHTML = points.toFixed(1);
    passiveDisplay.innerHTML = passive.toFixed(1);
}

button.addEventListener("click", function () {
    points+=clickstrength;
    pointsAll.classList.add("animation");
    setTimeout(function () {
        pointsAll.classList.remove("animation")
    }, 50)
    show();
})

setInterval(function () {
    points += passive / 100;
    show();
}, 10)

//Shop
let openClosed = true
openshop.addEventListener("click", function () {
    let shopDisplay = document.querySelector("#sklep");
    if (openClosed) {
        openshop.innerHTML = "Zamknij sklep"
        shopDisplay.style.setProperty("opacity", "100%");
        openClosed = false;
    }
    else{
        openshop.innerHTML = "Otworz sklep"
        shopDisplay.style.setProperty("opacity", "0%")
        openClosed = true;
    }
})

// First upgrade
upgrades[0] = document.querySelector("#upgrade0")
upgradesCost[0] = 5
increment[0] = 1;
let upgrade0cost = document.querySelector("#upgrade0cost");

upgrades[0].addEventListener("click", function () {
    if (points >= upgradesCost[0]) {
        points -= upgradesCost[0];
        passive += passiveGain;
        upgradesCost[0] += increment[0]
        upgrade0cost.innerHTML = upgradesCost[0];
        increment[0]+=0.5;
    }
})

// Second upgrade
upgrades[1] = document.querySelector("#upgrade1")
upgradesCost[1] = 50
increment[1] = 50;
let upgrade1cost = document.querySelector("#upgrade1cost");

upgrades[1].addEventListener("click", function () {
    if (points >= upgradesCost[1]) {
        points -= upgradesCost[1];
        clickstrength += 1;
        upgradesCost[1] += increment[1]
        upgrade1cost.innerHTML = upgradesCost[1];
        increment[1]*=2;
    }
})

// Third upgrade
upgrades[2] = document.querySelector("#upgrade2")
upgradesCost[2] = 1000;
increment[2] = 1000;
let upgrade2cost = document.querySelector("#upgrade2cost");

upgrades[2].addEventListener("click", function () {
    if (points >= upgradesCost[2]) {
        points -= upgradesCost[2];
        passiveGain*=2;
        passive*=2;
        upgradesCost[2] += increment[2]
        passiveGainDisplay.innerHTML = passiveGain;
        upgrade2cost.innerHTML = upgradesCost[2];
        increment[2]*=2;
    }
})

upgrade0cost.innerHTML = upgradesCost[0];
upgrade1cost.innerHTML = upgradesCost[1];
upgrade2cost.innerHTML = upgradesCost[2];

let pattern = "";
document.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        if(pattern == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightab"){
            points+=100000;
            pattern = "";
        }
        else
            pattern = "";
    }
    else
        pattern += e.key
        
})
