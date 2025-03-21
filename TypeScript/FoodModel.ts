import { FieldCell } from "./entiries/FieldCell";
import { BasicCell } from "./entiries/BasicCell";
import { ICell } from "./entiries/ICell";

let foodCellArray: BasicCell[] = []

export function createInitialData() {
    const newFieldCell = FieldCell.create()
    foodCellArray = [new BasicCell(newFieldCell.x, newFieldCell.y)]
}

export function getFoodCellArrayCopy(): BasicCell[] {
    return foodCellArray.map(foodCell =>
        new BasicCell(foodCell.x, foodCell.y)
    )
}

export function contain(anotherCell: ICell): boolean {
    return foodCellArray.some(foodItem => foodItem.equals(anotherCell))
}