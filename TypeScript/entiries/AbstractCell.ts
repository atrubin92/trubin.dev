import { ICell } from "./ICell"

export abstract class AbstractCell implements ICell {
    x: number
    y: number

    protected constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    equals(other: ICell): boolean {
        return this.x === other.x && this.y === other.y
    }
}
