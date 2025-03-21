import { ICell } from "./ICell";
import { getSnakeCellArrayCopy } from "../SnakeModel";
import { getFoodCellArrayCopy } from "../FoodModel";
import * as Setting from "../Settings";
import { SimpleCell } from "./SimpleCell";

export function findEmptyCell(): ICell {
    const width = Setting.getFieldWidth();
    const height = Setting.getFieldHeight();

    const snakeCells:ICell[] = getSnakeCellArrayCopy();
    const foodCells:ICell[] = getFoodCellArrayCopy();

    const occupiedCells = new Set(
        snakeCells.concat(foodCells).map(cell => `${cell.x},${cell.y}`)
    );

    const emptyCells: ICell[] = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const key = `${x},${y}`;
            if (!occupiedCells.has(key)) {
                emptyCells.push(new SimpleCell(x, y));
            }
        }
    }

    if (emptyCells.length === 0) {
        throw new Error("No empty cells available!");
    }

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
}
