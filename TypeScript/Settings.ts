import * as StepDurationSetting from "./settings/StepDurationSetting";

const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement;
const startPauseButton = document.getElementById("startPauseButton") as HTMLButtonElement;

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

export function displaySnakeLength(snakeLength: number) {
    if (0 <= snakeLength) {
        scoreLabel.textContent = "Score: " + snakeLength
    }
}

export function displaySettings() {
    StepDurationSetting.displaySetting()
}