import * as Settings from "./Settings";

export interface SnakeCell {
    x: number;
    y: number;

    dir?: Direction;
}

export namespace SnakeCell {
    export function create(): SnakeCell {
        const x = Math.floor(Math.random() * Settings.getFieldWidth());
        const y = Math.floor(Math.random() * Settings.getFieldHeight());

        return { x, y };
    }
}