let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');

function updateDisplay() {
    const hours = Math.floor((elapsedTime / 3600000) % 60);
    const minutes = Math.floor((elapsedTime / 60000) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    
    display.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        const startTime = Date.now() - elapsedTime;

        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = display.innerText;
        const lapItem = document.createElement('li');
        lapItem.innerText = lapTime;
        lapList.appendChild(lapItem);
    }
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);
