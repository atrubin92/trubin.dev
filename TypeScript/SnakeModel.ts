import { SnakeCell } from "./entiries/SnakeCell"
import * as SnakeHead from "./SnakeHead"
import * as Settings from "./Settings";
import { FieldCell } from "./entiries/FieldCell";

let snake: SnakeCell[] = []

export function createInitialData() {
    snake = [SnakeCell.create(SnakeHead.getOffsets())]
}

export function reset() {
    SnakeHead.reset()
    snake = []
}

export function calcNewHead() {
    const previousHeadDirection = SnakeHead.getOffsets()

    const newHeadX = (snake[0].x + previousHeadDirection.x + Settings.getFieldWidth()) % Settings.getFieldWidth()
    const newHeadY = (snake[0].y + previousHeadDirection.y + Settings.getFieldHeight()) % Settings.getFieldHeight()

    SnakeHead.updateCurrentStep()
    const currentHeadDirection = SnakeHead.getOffsets()

    return { x: newHeadX, y: newHeadY, dir: currentHeadDirection }
}

export function getLength(): number {
    return snake.length
}
export function unshift(newHead: SnakeCell) {
    snake.unshift(newHead)
}

export function pop() {
    snake.pop()
}

export function getSnakeCopy(): SnakeCell[] {
    return snake.map(cell => ({ ...cell }))
}

export function contain(newPart: FieldCell): boolean {
    return snake.some(part => part.x === newPart.x && part.y === newPart.y)
}
