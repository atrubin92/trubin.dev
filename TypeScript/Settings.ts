import * as StepDurationSetting from "./settings/StepDurationSetting"
import * as GameStateSetting from "./settings/GameStateSetting"
import { GameState } from "./settings/GameState"

const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement

const fieldWidth = 10
const fieldHeight = 10

export function getFieldWidth() {
    return fieldWidth
}

export function getFieldHeight() {
    return fieldHeight
}

export function getGameState(): GameState {
    return GameStateSetting.getGameState()
}

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