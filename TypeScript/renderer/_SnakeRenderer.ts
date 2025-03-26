import { SnakeCell } from "../entiries/cell/SnakeCell";
import { getFieldWidth, getFieldHeight } from "../settings/Settings";
import { drawSnakeCell } from "./snake-cell/SnakeCellRenderer";

export function drawSnake(snake: SnakeCell[], stepPercentage: number = 0) {
    const snakeScaleDiff = 0.3

    for (let partSnakeIndex = snake.length - 1; partSnakeIndex >= 0; partSnakeIndex--) {
        const snakeCellScale = 1 - snakeScaleDiff * partSnakeIndex / snake.length
        drawWrappedSnakeCell(snake[partSnakeIndex], stepPercentage, snakeCellScale)
    }
}

function drawWrappedSnakeCell(snakeCell: SnakeCell, stepPercentage: number, snakeCellScale: number) {
    let cellX = snakeCell.x + snakeCell.dir.x * stepPercentage;
    let cellY = snakeCell.y + snakeCell.dir.y * stepPercentage;

    drawSnakeCell(cellX, cellY, snakeCellScale);

    cellX -= snakeCell.dir.x * getFieldWidth()
    cellY -= snakeCell.dir.y * getFieldHeight()

    drawSnakeCell(cellX, cellY, snakeCellScale);
}