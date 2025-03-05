const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement;
const stepDurationInput = document.getElementById('stepDurationInput') as HTMLInputElement;
const startPauseButton = document.getElementById("startPauseButton") as HTMLButtonElement;

let snakeLength = 0
export let stepDuration = 300

stepDurationInput.addEventListener('change', () => {
    const newValue = parseInt(stepDurationInput.value, 10);
    if (!isNaN(newValue)) {
        stepDuration = newValue;
    }
});

stepDurationInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

stepDurationInput.addEventListener("input", () => {
    const value = parseInt(stepDurationInput.value, 10);
    if (value > 2000) {
        stepDurationInput.style.backgroundColor = "red";
    } else {
        stepDurationInput.style.backgroundColor = "";
    }
});

startPauseButton.addEventListener("click", () => {
    if (startPauseButton.innerText === "Start") {
        startPauseButton.innerText = "Pause";
    } else {
        startPauseButton.innerText = "Start";
    }
});

export function setSnakeLength(newSnakeLength: number) {
    if (newSnakeLength >= 0) {
        snakeLength = newSnakeLength;
        displaySetting();
    }
}

export function displaySetting() {
    scoreLabel.textContent = "Score: " + snakeLength
    stepDurationInput.textContent = stepDuration.toString()
}