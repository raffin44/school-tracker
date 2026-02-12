// VARIABLES
let count = 0;
let historyLog = [];

// DOM ELEMENTS
const countEl = document.getElementById("count-el");
const logEl = document.getElementById("log-el");
const totalEl = document.getElementById("total-el");

// INCREMENT FUNCTION
function increment() {
    count += 1;
    countEl.textContent = count;
    console.log("Current count:", count);
}

// SAVE FUNCTION
function save() {

    // push current count into history array
    historyLog.push(count);

    // update UI
    renderHistory();
    calculateTotal();

    // reset counter
    count = 0;
    countEl.textContent = count;
}

// RENDER HISTORY
function renderHistory() {
    logEl.textContent = historyLog.join(" - ");
}

// CALCULATE TOTAL
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < historyLog.length; i++) {
        total += historyLog[i];
    }

    totalEl.textContent = total;
}

// RESET EVERYTHING
function resetAll() {
    count = 0;
    historyLog = [];
    countEl.textContent = 0;
    totalEl.textContent = 0;
    logEl.innerHTML = "";
}

let spiritCount = 0;

function spiritDay() {
    spiritCount++;
    alert("Spirit Day participants: " + spiritCount);
}

