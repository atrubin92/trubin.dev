const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement;
const frameDurationInput = document.getElementById('frameDurationInput') as HTMLInputElement;
const startPauseButton = document.getElementById("startPauseButton") as HTMLButtonElement;

let snakeLength = 0
export let frameDuration = 300

frameDurationInput.addEventListener('change', () => {
    const newValue = parseInt(frameDurationInput.value, 10);
    if (!isNaN(newValue)) {
        frameDuration = newValue;
    }
});

frameDurationInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

frameDurationInput.addEventListener("input", () => {
    const value = parseInt(frameDurationInput.value, 10);
    if (value > 2000) {
        frameDurationInput.style.backgroundColor = "red";
    } else {
        frameDurationInput.style.backgroundColor = "";
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
    frameDurationInput.textContent = frameDuration.toString()
}