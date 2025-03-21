import { FieldCell } from "./entiries/FieldCell";
import { FoodCell } from "./entiries/FoodCell";
import { ICell } from "./entiries/ICell";

let foodCellArray: FoodCell[] = []

export function createInitialData() {
    const newFieldCell = FieldCell.create()
    foodCellArray = [new FoodCell(newFieldCell.x, newFieldCell.y)]
}

export function getFoodCellArrayCopy(): FoodCell[] {
    return foodCellArray.map(foodCell =>
        new FoodCell(foodCell.x, foodCell.y)
    )
}

export function contain(anotherCell: ICell): boolean {
    return foodCellArray.some(foodItem => foodItem.equals(anotherCell))
}