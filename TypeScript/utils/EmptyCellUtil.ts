import { ICell } from "../entiries/cell/ICell";
import { getSnakeCellArrayCopy } from "../SnakeModel";
import { getFoodCellArrayCopy } from "../FoodModel";
import * as Setting from "../settings/Settings";
import { SimpleCell } from "../entiries/cell/SimpleCell";

export function findEmptyCell(): ICell {
    const emptyCellArray = createEmptyCellArray()    

    if (emptyCellArray.length === 0) {
        return null
    }

    const randomIndex = Math.floor(Math.random() * emptyCellArray.length);
    return emptyCellArray[randomIndex];
}

function createOccupiedCellSet(): Set<string> {
    const snakeCells: ICell[] = getSnakeCellArrayCopy();
    const foodCells: ICell[] = getFoodCellArrayCopy();

    const occupiedCells = new Set(
        snakeCells.concat(foodCells).map(cellToKey)
    );

    return occupiedCells
}

function createEmptyCellArray(): ICell[] {
    const occupiedCellSet = createOccupiedCellSet()

    const width = Setting.getFieldWidth();
    const height = Setting.getFieldHeight();

    const emptyCellArray: ICell[] = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const key = coordinateToKey(x, y);
            if (!occupiedCellSet.has(key)) {
                emptyCellArray.push(new SimpleCell(x, y));
            }
        }
    }

    return emptyCellArray
}

function cellToKey(cell: ICell): string {
    return coordinateToKey(cell.x, cell.y)
}

function coordinateToKey(x: number, y: number): string {
    return `${x},${y}`
}
