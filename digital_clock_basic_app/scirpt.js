console.log("Clock app runnig")

const clock = document.getElementById("clock")


function updateClock() {

    const now = new Date();
    const currentHour = now.getHours();

    let hours = currentHour;
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    let period;

    if (currentHour >= 12) {
        period = "PM";
    }
    else {
        period = "AM";
    }

    if (hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours - 12;
    }

    hours = String(hours).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`
}


setInterval(updateClock, 1000);