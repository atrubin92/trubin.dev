import { SimpleCell } from "./entiries/SimpleCell";
import { ICell } from "./entiries/ICell";
import { findEmptyCell } from "./utils/EmptyCellUtil";

let foodCellArray: SimpleCell[] = []

export function createInitialData() {
    const emptyCell = findEmptyCell()
    foodCellArray = [new SimpleCell(emptyCell.x, emptyCell.y)]
}

export function getFoodCellArrayCopy(): SimpleCell[] {
    return foodCellArray.map(foodCell =>
        new SimpleCell(foodCell.x, foodCell.y)
    )
}

export function contain(anotherCell: ICell): boolean {
    return foodCellArray.some(foodItem => foodItem.equals(anotherCell))
}