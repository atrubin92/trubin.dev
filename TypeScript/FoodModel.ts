import { SimpleCell } from "./entiries/cell/SimpleCell";
import { ICell } from "./entiries/cell/ICell";
import { findEmptyCell } from "./utils/EmptyCellUtil";

const foodCellArray: SimpleCell[] = []

export function createInitialData() {
    const emptyCell = findEmptyCell()
    foodCellArray.length = 0
    foodCellArray.push(new SimpleCell(emptyCell.x, emptyCell.y))
}

export function getFoodCellArrayCopy(): SimpleCell[] {
    return foodCellArray.map(foodCell =>
        new SimpleCell(foodCell.x, foodCell.y)
    )
}

export function contain(anotherCell: ICell): boolean {
    return foodCellArray.some(foodItem => foodItem.equals(anotherCell))
}