import { SnakeCell } from "./entiries/SnakeCell"
import * as SnakeHead from "./SnakeHead"
import * as Settings from "./Settings";
import { FieldCell } from "./entiries/FieldCell";
import { ICell } from "./entiries/ICell";

let snakeCellArray: SnakeCell[] = []

export function createInitialData() {
    const newFieldCell = FieldCell.create()
    snakeCellArray = [new SnakeCell(newFieldCell.x, newFieldCell.y, SnakeHead.getDirection())]
}

export function reset() {
    SnakeHead.reset()
    snakeCellArray = []
}

export function calcNewHead(): SnakeCell {
    const previousHeadDirection = SnakeHead.getDirection()

    const newHeadX = (snakeCellArray[0].x + previousHeadDirection.x + Settings.getFieldWidth()) % Settings.getFieldWidth()
    const newHeadY = (snakeCellArray[0].y + previousHeadDirection.y + Settings.getFieldHeight()) % Settings.getFieldHeight()

    SnakeHead.updateCurrentStep()
    const currentHeadDirection = SnakeHead.getDirection()

    return new SnakeCell(newHeadX, newHeadY, currentHeadDirection)
}

export function getLength(): number {
    return snakeCellArray.length
}
export function unshift(newHead: SnakeCell) {
    snakeCellArray.unshift(newHead)
}

export function pop() {
    snakeCellArray.pop()
}

export function getSnakeCellArrayCopy(): SnakeCell[] {
    return snakeCellArray.map(snakeCellItem =>
        new SnakeCell(snakeCellItem.x, snakeCellItem.y, snakeCellItem.dir)
    )
}

export function contain(anotherCell: ICell): boolean {
    return snakeCellArray.some(snakeCellItem => snakeCellItem.equals(anotherCell))
}

export function containsAny(anotherCellArray: ICell[]): boolean {
    return anotherCellArray.some(anotherCell => 
        snakeCellArray.some(snakeCellItem => snakeCellItem.equals(anotherCell))
    );
}
