const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement;
const frameDurationLabel = document.getElementById("frameDurationLabel") as HTMLDivElement;

let snakeLength = 0
export const frameDuration = 300

export function setSnakeLength(newSnakeLength: number) {
    if (newSnakeLength >= 0) {
        snakeLength = newSnakeLength;
        displaySetting();
    }
}

export function displaySetting() {
    scoreLabel.textContent = "Score: " + snakeLength
    frameDurationLabel.textContent = "Frame Duration: " + frameDuration
}