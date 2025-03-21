import { FieldCell } from "./entiries/FieldCell";
import { SimpleCell } from "./entiries/SimpleCell";
import { ICell } from "./entiries/ICell";

let foodCellArray: SimpleCell[] = []

export function createInitialData() {
    const newFieldCell = FieldCell.create()
    foodCellArray = [new SimpleCell(newFieldCell.x, newFieldCell.y)]
}

export function getFoodCellArrayCopy(): SimpleCell[] {
    return foodCellArray.map(foodCell =>
        new SimpleCell(foodCell.x, foodCell.y)
    )
}

export function contain(anotherCell: ICell): boolean {
    return foodCellArray.some(foodItem => foodItem.equals(anotherCell))
}