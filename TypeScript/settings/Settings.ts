import * as StepDurationSetting from "./_StepDurationSetting"
import * as GameStateSetting from "./_GameStateSetting"
import * as FieldSizeSetting from "./_FieldSizeSetting"
import * as ScoreSetting from "./_ScoreSetting"
import * as FoodCountSetting from "./_FoodCountSetting"
import * as BoxSizeSetting from "./_BoxSizeSetting"
import * as SnakeCellTypeSetting from "./_SnakeCellTypeSetting"
import * as CellColorSetting from "./_CellColorSetting";
import * as CanvasSizeSetting from "./_CanvasSizeSetting"
import { GameState } from "../entiries/GameState"
import { SnakeCellType } from "../entiries/SnakeCellType"
import { SnakeColor } from "../entiries/SnakeColor"

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

export function updateBoxSize() {
    BoxSizeSetting.updateBoxSize()
}

export function getBoxWidth(): number {
    return BoxSizeSetting.getBoxWidth()
}

export function getBoxHeight(): number {
    return BoxSizeSetting.getBoxHeight()
}

export function getHalfBoxWidth(): number {
    return BoxSizeSetting.getHalfBoxWidth()
}

export function getHalfBoxHeight(): number {
    return BoxSizeSetting.getHalfBoxHeight()
}

export function getSnakeCellType(): SnakeCellType {
    return SnakeCellTypeSetting.getSnakeCellType()
}

export function getCellColorArray(): SnakeColor[] {
    return CellColorSetting.getSnakeColorArray()
}

export function getCanvasSize(): number {
    return CanvasSizeSetting.getCanvasSize()
}
