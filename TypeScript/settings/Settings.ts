import * as StepDurationSetting from "./_StepDurationSetting"
import * as GameStateSetting from "./_GameStateSetting"
import * as FieldSizeSetting from "./_FieldSizeSetting"
import * as ScoreSetting from "./_ScoreSetting"
import * as FoodCountSetting from "./_FoodCountSetting"
import * as BoxSize from "./_BoxSizeSetting"
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

export function gemeOver() {
    GameStateSetting.gameOver()
}

export function displayScore(snakeValue: number) {
    ScoreSetting.displayScore(snakeValue)
}

export function getStepDuration() {
    return StepDurationSetting.getStepDuration()
}

export function getFoodCount() {
    return FoodCountSetting.getFoodCount()
}

export function getBoxWidth(): number {
    return BoxSize.getBoxWidth()
}

export function getBoxHeight(): number {
    return BoxSize.getBoxHeight()
}

export function getHalfBoxWidth(): number {
    return BoxSize.getHalfBoxWidth()
}

export function getHalfBoxHeight(): number {
    return BoxSize.getHalfBoxHeight()
}
