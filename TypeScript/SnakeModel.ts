import { SnakeCell } from "./entiries/cell/SnakeCell"
import * as SnakeHead from "./SnakeHead"
import * as Settings from "./settings/Settings";
import { ICell } from "./entiries/cell/ICell";
import { findEmptyCell } from "./utils/EmptyCellUtil";
import { SimpleCell } from "./entiries/cell/SimpleCell";

const snakeCellArray: SnakeCell[] = []

export function createInitialData() {
    const emptyCell = findEmptyCell()
    snakeCellArray.length = 0
    snakeCellArray.push(new SnakeCell(emptyCell.x, emptyCell.y, SnakeHead.getDirection()))
}

export function reset() {
    SnakeHead.reset()
    snakeCellArray.length = 0
}

export function isFinalStep(): boolean {
    const previousHeadDirection = SnakeHead.getDirection()

    const newHeadX = (snakeCellArray[0].x + previousHeadDirection.x + Settings.getFieldWidth()) % Settings.getFieldWidth()
    const newHeadY = (snakeCellArray[0].y + previousHeadDirection.y + Settings.getFieldHeight()) % Settings.getFieldHeight()

    return containsWithoutTail(new SimpleCell(newHeadX, newHeadY))
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
export function addHead(newHead: SnakeCell) {
    snakeCellArray.unshift(newHead)
}

export function removeTail() {
    snakeCellArray.pop()
}

export function getSnakeCellArrayCopy(): SnakeCell[] {
    return snakeCellArray.map(snakeCellItem =>
        new SnakeCell(snakeCellItem.x, snakeCellItem.y, snakeCellItem.dir)
    )
}

export function containsWithoutTail(anotherCell: ICell): boolean {
    return snakeCellArray
        .slice(0, -1)
        .some(snakeCellItem => snakeCellItem.equals(anotherCell))
}
