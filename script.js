const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const resetBtn = document.querySelector('.btn-reset');
const pauseBtn = document.querySelector('.btn-pause');
const session = document.querySelector('.minutes');
let myInterval;
let state = true;
let totalSeconds = 25 * 60; // Initial time: 25 minutes

const updateTimer = () => {
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');

    totalSeconds--;

    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;

    if (secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
    } else {
        secondDiv.textContent = secondsLeft;
    }
    minuteDiv.textContent = `${minutesLeft}`;

    if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
    }
};

const appTimer = () => {
    if (state) {
        state = false;
        myInterval = setInterval(updateTimer, 1000);
    } else {
        alert('Session has already started.');
    }
};

const resetTimer = () => {
    clearInterval(myInterval);
    totalSeconds = 25 * 60; // Reset to initial time: 25 minutes
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');
    minuteDiv.textContent = '25';
    secondDiv.textContent = '00';
    state = true; // Reset the state to allow starting again
};

const pauseTimer = () => {
    clearInterval(myInterval);
    state = true; // Reset the state to allow starting again
};

startBtn.addEventListener('click', appTimer);
resetBtn.addEventListener('click', resetTimer);
pauseBtn.addEventListener('click', pauseTimer);
