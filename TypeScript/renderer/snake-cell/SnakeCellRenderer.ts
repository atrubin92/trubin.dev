import * as SquareSnakeCellRenderer from "./_SquareSnakeCellRenderer";

export function drawSnakeCell(partX: number, partY: number, snakeCellScale: number) {
    const colorArray: string[] = ["green", "rgb(128, 0, 0)", "blue", "red"]
    SquareSnakeCellRenderer.drawSnakeCell(partX, partY, colorArray, snakeCellScale)
}