import * as StepDurationSetting from "./_StepDurationSetting"
import * as GameStateSetting from "./_GameStateSetting"
import * as FieldSizeSetting from "./_FieldSizeSetting"
import * as ScoreSetting from "./_ScoreSetting"
import { GameState } from "../entiries/GameState"

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
