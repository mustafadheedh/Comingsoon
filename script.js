// Countdown Timer Logic
const countdown = () => {
    const launchDate = new Date("Oct 13, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeDifference = launchDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeDifference < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "We're Live!";
    }
};

const timer = setInterval(countdown, 1000);
