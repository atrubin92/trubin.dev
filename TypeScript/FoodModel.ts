import { FieldCell } from "./entiries/FieldCell";

let foodArray: FieldCell[] = []

export function createInitialData() {
    foodArray = [FieldCell.create()]
}

export function getFoodCopy(): FieldCell {
    return foodArray.map(food => ({ ...food }))[0]
}