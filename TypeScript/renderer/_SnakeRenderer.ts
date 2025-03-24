import { SnakeCell } from "../entiries/cell/SnakeCell";
import { getBoxWidth, getBoxHeight, getHalfBoxWidth, getHalfBoxHeight } from "../settings/Settings";
import { getFieldWidth, getFieldHeight } from "../settings/Settings";
import { context } from "_CanvasContext";

export function drawSnake(snake: SnakeCell[], stepPercentage: number = 0) {
    const snakeScaleDiff = 0.3

    for (let partSnakeIndex = snake.length - 1; partSnakeIndex >= 0; partSnakeIndex--) {
        const snakeCellScale = 1 - snakeScaleDiff * partSnakeIndex / snake.length
        drawWrappedSnakeCell(snake[partSnakeIndex], stepPercentage, snakeCellScale)
    }
}

function drawWrappedSnakeCell(snakeCell: SnakeCell, stepPercentage: number, snakeCellScale: number) {
    let partX = snakeCell.x + snakeCell.dir.x * stepPercentage;
    let partY = snakeCell.y + snakeCell.dir.y * stepPercentage;

    drawSnakeCell(partX, partY, snakeCellScale);

    partX -= snakeCell.dir.x * getFieldWidth()
    partY -= snakeCell.dir.y * getFieldHeight()

    drawSnakeCell(partX, partY, snakeCellScale);
}

function drawSnakeCell(partX: number, partY: number, snakeCellScale: number) {
    drawCell(partX, partY, "green", snakeCellScale)
    drawCell(partX, partY, "rgb(128, 0, 0)", 0.5 * snakeCellScale)
}

function drawCell(partX: number, partY: number, color: string, sizePercentage: number = 1) {
    context.fillStyle = color
    context.fillRect(
        partX * getBoxWidth() + getHalfBoxWidth() - getHalfBoxWidth() * sizePercentage,
        partY * getBoxHeight() + getHalfBoxHeight() - getHalfBoxHeight() * sizePercentage,
        getBoxWidth() * sizePercentage,
        getBoxHeight() * sizePercentage
    )
}