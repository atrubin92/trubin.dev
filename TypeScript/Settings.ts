import * as StepDurationSetting from "./settings/StepDurationSetting"
import * as GameStateSetting from "./settings/GameStateSetting"
import * as FieldSizeSetting from "./settings/FieldSizeSetting"
import * as ScoreSetting from "./settings/ScoreSetting"
import { GameState } from "./settings/GameState"

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
