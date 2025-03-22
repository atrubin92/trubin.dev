import * as StepDurationSetting from "./StepDurationSetting"
import * as GameStateSetting from "./GameStateSetting"
import * as FieldSizeSetting from "./FieldSizeSetting"
import * as ScoreSetting from "./ScoreSetting"
import { GameState } from "./GameState"

export function getFieldWidth() {
    return FieldSizeSetting.getFieldWidth()
}

export function getFieldHeight() {
    return FieldSizeSetting.getFieldHeight()
}

export function getGameState(): GameState {
    return GameStateSetting.getGameState()
}

export function displayScore(snakeValue: number) {
    ScoreSetting.displayScore(snakeValue)
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
