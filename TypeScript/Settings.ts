import * as StepDurationSetting from "./settings/StepDurationSetting";

const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement;
const startPauseButton = document.getElementById("startPauseButton") as HTMLButtonElement;

let snakeLength = 0

export function getStepDuration() {
    return StepDurationSetting.stepDuration;
};

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
    StepDurationSetting.displaySetting()
}