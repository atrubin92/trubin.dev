import { SnakeCell } from "./entiries/SnakeCell"
import * as SnakeHead from "./SnakeHead"
import * as Settings from "./Settings";
import { FieldCell } from "./entiries/FieldCell";

let snakeCellArray: SnakeCell[] = []

export function createInitialData() {
    const newFieldCell = FieldCell.create()
    snakeCellArray = [new SnakeCell(newFieldCell.x, newFieldCell.y, SnakeHead.getOffsets())]
}

export function reset() {
    SnakeHead.reset()
    snakeCellArray = []
}

export function calcNewHead():SnakeCell {
    const previousHeadDirection = SnakeHead.getOffsets()

    const newHeadX = (snakeCellArray[0].x + previousHeadDirection.x + Settings.getFieldWidth()) % Settings.getFieldWidth()
    const newHeadY = (snakeCellArray[0].y + previousHeadDirection.y + Settings.getFieldHeight()) % Settings.getFieldHeight()

    SnakeHead.updateCurrentStep()
    const currentHeadDirection = SnakeHead.getOffsets()

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

export function getSnakeCopy(): SnakeCell[] {
    return snakeCellArray.map(snakeCell => 
            new SnakeCell(snakeCell.x, snakeCell.y, snakeCell.dir)
        )
}

export function contain(newPart: FieldCell): boolean {
    return snakeCellArray.some(part => part.x === newPart.x && part.y === newPart.y)
}
