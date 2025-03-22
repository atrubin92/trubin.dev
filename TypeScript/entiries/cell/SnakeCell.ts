import { AbstractCell } from "./AbstractCell";

export class SnakeCell extends AbstractCell {
    dir: Direction;

    constructor(x: number, y: number, dir: Direction) {
        super(x, y);
        this.dir = dir;
    }
}
