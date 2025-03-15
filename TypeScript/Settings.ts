import * as StepDurationSetting from "./settings/StepDurationSetting"
import * as GameStateSetting from "./settings/GameStateSetting"
import * as FieldSizeSetting from "./settings/FieldSizeSetting"
import { GameState } from "./settings/GameState"

const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement

export function getFieldWidth() {
    return FieldSizeSetting.getFieldWidth()
}

export function getFieldHeight() {
    return FieldSizeSetting.getFieldHeight()
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

export function gemeOver() {
    GameStateSetting.gameOver()
}
