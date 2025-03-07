import { SnakeCell } from "./SnakeCell"
import * as SnakeHead from "./SnakeHead"
import * as FieldCanvas from "./FieldCanvas"

let snake: SnakeCell[]

export function createInitialData() {
    snake = [createCell()]
    snake[0] = calcNewHead()
}

export function calcNewHead() {
    const previousHeadDirection = SnakeHead.getOffsets()

    const newHeadX = (snake[0].x + previousHeadDirection.x + FieldCanvas.fieldWidth) % FieldCanvas.fieldWidth
    const newHeadY = (snake[0].y + previousHeadDirection.y + FieldCanvas.fieldHeight) % FieldCanvas.fieldHeight

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

function createCell(): SnakeCell {
    return SnakeCell.create(FieldCanvas.fieldWidth, FieldCanvas.fieldHeight)
}

export function getSnakeCopy(): SnakeCell[] {
    return snake.map(cell => ({ ...cell }))
}

export function contain(newPart: SnakeCell): boolean {
    return snake.some(part => part.x === newPart.x && part.y === newPart.y)
}

