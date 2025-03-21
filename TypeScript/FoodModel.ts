import { FieldCell } from "./entiries/FieldCell";

let foodArray: FieldCell[] = []

export function createInitialData() {
    foodArray = [FieldCell.create()]
}

export function getFoodArrayCopy(): FieldCell {
    return foodArray.map(foodItem => ({ ...foodItem }))[0]
}

export function contain(newCell: FieldCell): boolean {
    return foodArray.some(foodItem => foodItem.x === newCell.x && foodItem.y === newCell.y)
}