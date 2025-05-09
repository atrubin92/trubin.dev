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

function wrapCoordinate(coordinate: number, delta: number, coorDinateMax: number): number {
    return (coordinate + delta + coorDinateMax) % coorDinateMax;
}

function calcNewHeadCoordinates(): SimpleCell {
    const headDirection = SnakeHead.getDirection()
    const head = snakeCellArray[0]

    const newHeadX = wrapCoordinate(head.x, headDirection.x, Settings.getFieldWidth());
    const newHeadY = wrapCoordinate(head.y, headDirection.y, Settings.getFieldHeight());

    return new SimpleCell(newHeadX, newHeadY);
}

export function isFinalStep(): boolean {
    const newHeadCell = calcNewHeadCoordinates();
    return containsWithoutTail(newHeadCell);
}

export function calcNewHead(): SnakeCell {
    const newHeadCell = calcNewHeadCoordinates();

    SnakeHead.updateCurrentStep()
    const newHeadDirection = SnakeHead.getDirection();

    return new SnakeCell(newHeadCell.x, newHeadCell.y, newHeadDirection);
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
