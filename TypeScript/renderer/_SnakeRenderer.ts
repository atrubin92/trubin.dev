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
    let partX = snakeCell.x + snakeCell.dir.x * stepPercentage;
    let partY = snakeCell.y + snakeCell.dir.y * stepPercentage;

    drawSnakeCell(partX, partY, snakeCellScale);

    partX -= snakeCell.dir.x * getFieldWidth()
    partY -= snakeCell.dir.y * getFieldHeight()

    drawSnakeCell(partX, partY, snakeCellScale);
}