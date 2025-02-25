export interface SnakeCell {
    x: number;
    y: number;

    dir?: Direction;
}

export namespace SnakeCell {
    export function create(xLimit: number, yLimit: number): SnakeCell {
        const x = Math.floor(Math.random() * xLimit);
        const y = Math.floor(Math.random() * yLimit);

        return { x, y };
    }
}