console.log("Stopwatch app");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

function updateTimmer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

startButton.addEventListener("click", function () {
    if (timer === null) {
        timer = setInterval(updateTimmer, 1000)
    }
});

stopButton.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

resetButton.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    hours = 0;
    minutes = 0;

    display.textContent = "00:00:00"
});