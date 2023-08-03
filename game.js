let coins = 0;
let cps = 0;
let object1Cost = 10;
let object1ClickValue = 1;
let object2Cost = 50;
let object2CPS = 0;

const clickButton = document.getElementById('clickButton');
const coinsDisplay = document.getElementById('coins');
const cpsDisplay = document.getElementById('cps');
const object1CostDisplay = document.getElementById('object1Cost');
const object1ClickValueDisplay = document.getElementById('object1ClickValue');
const object2CostDisplay = document.getElementById('object2Cost');
const object2CPSDisplay = document.getElementById('object2CPS');

function incrementCoins() {
    coins += object1ClickValue;
    coinsDisplay.textContent = coins;
}

function updateCPS() {
    cps = object2CPS;
    cpsDisplay.textContent = cps;
}

function buyObject(objectNumber) {
    if (objectNumber === 1 && coins >= object1Cost) {
        coins -= object1Cost;
        object1Cost = Math.round(object1Cost * 1.2);
        object1ClickValue += 1;
        object1CostDisplay.textContent = object1Cost;
        object1ClickValueDisplay.textContent = object1ClickValue;
    } else if (objectNumber === 2 && coins >= object2Cost) {
        coins -= object2Cost;
        object2Cost = Math.round(object2Cost * 1.2);
        object2CPS += 1;
        object2CostDisplay.textContent = object2Cost;
        object2CPSDisplay.textContent = object2CPS;
    }
}

function gameLoop() {
    updateCPS();
    coins += cps;
    coinsDisplay.textContent = coins;
    setTimeout(gameLoop, 500); // Actualiza cada segundo (500 ms)
}

gameLoop();
