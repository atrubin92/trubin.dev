const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement;
const frameDurationInput = document.getElementById('frameDurationInput') as HTMLInputElement;

let snakeLength = 0
export let frameDuration = 300

frameDurationInput.addEventListener('change', () => {
    const newValue = parseInt(frameDurationInput.value, 10);
    if (!isNaN(newValue)) {
        frameDuration = newValue;
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