import { FieldCell } from "./FieldCell"
import * as Settings from "../Settings"

export interface SnakeCell extends FieldCell {
    dir: Direction
}

export namespace SnakeCell {
    export function create(dir: Direction): SnakeCell {
        const x = Math.floor(Math.random() * Settings.getFieldWidth());
        const y = Math.floor(Math.random() * Settings.getFieldHeight());

        return { x, y, dir};
    }
}
