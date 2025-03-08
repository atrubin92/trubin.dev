import * as StepDurationSetting from "./settings/StepDurationSetting";

const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement;
const startPauseButton = document.getElementById("startPauseButton") as HTMLButtonElement;

const fieldWidth = 10
const fieldHeight = 10

export function getFieldWidth() {
    return fieldWidth
}

export function getFieldHeight() {
    return fieldHeight
}

startPauseButton.addEventListener("click", () => {
    if (startPauseButton.innerText === "Start") {
        startPauseButton.innerText = "Pause"
    } else {
        startPauseButton.innerText = "Start"
    }
})

export function displaySnakeLength(snakeLength: number) {
    if (0 <= snakeLength) {
        scoreLabel.textContent = "Score: " + snakeLength
    }
}

export function getStepDuration() {
    return StepDurationSetting.stepDuration;
}

export function displaySettings() {
    StepDurationSetting.displaySetting()
}