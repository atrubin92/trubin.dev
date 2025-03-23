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

export function replace(anotherCell: ICell) {
    const replacedIndex = foodCellArray.findIndex(cell => cell.equals(anotherCell))
    if (replacedIndex == -1) {
        return false
    }

    const emptyCell = findEmptyCell()
    foodCellArray[replacedIndex] = new SimpleCell(emptyCell.x, emptyCell.y)
    return true
}
