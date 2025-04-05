import { SimpleCell } from "./entiries/cell/SimpleCell";
import { ICell } from "./entiries/cell/ICell";
import { findEmptyCell } from "./utils/EmptyCellUtil";
import * as Settings from "./settings/Settings";

const foodCellArray: SimpleCell[] = []

export function createInitialData() {
    foodCellArray.length = 0
    const foodCount = Settings.getFoodCount()

    while (foodCellArray.length < foodCount) {
        const emptyCell = findEmptyCell()
        foodCellArray.push(new SimpleCell(emptyCell.x, emptyCell.y))
    }
}

export function getFoodCellArrayCopy(): SimpleCell[] {
    return foodCellArray.map(foodCell =>
        new SimpleCell(foodCell.x, foodCell.y)
    )
}

export function tryEatFood(anotherCell: ICell) {
    const replacedIndex = foodCellArray.findIndex(cell => cell.equals(anotherCell))
    if (replacedIndex == -1) {
        return false
    }

    const emptyCell = findEmptyCell()
    if (emptyCell != null) {
        foodCellArray[replacedIndex] = new SimpleCell(emptyCell.x, emptyCell.y)
    } else {
        foodCellArray.splice(replacedIndex, 1)
    }
    return true
}

export function reset() {
    foodCellArray.length = 0
}
