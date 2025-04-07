import { SnakeCell } from "../entiries/cell/SnakeCell";
import { DrawCellParams } from "../entiries/DrawCellParams";
import { getFieldWidth, getFieldHeight, getBoxWidth, getBoxHeight } from "../settings/Settings";
import { getSnakeCellType } from "../settings/Settings";
import { drawSnakeCell } from "./snake-cell/SnakeCellRenderer";
import { context } from "./_CanvasContext";

export function drawSnake(snake: SnakeCell[], stepPercentage: number = 0) {
    const drawCellParams = new DrawCellParams()
    drawCellParams.context = context
    drawCellParams.boxWidth = getBoxWidth()
    drawCellParams.boxHeight = getBoxHeight()
    drawCellParams.snakeCellType = getSnakeCellType()

    const snakeScaleDiff = 0.3

    for (let partSnakeIndex = snake.length - 1; partSnakeIndex >= 0; partSnakeIndex--) {
        drawCellParams.sizeScale = 1 - snakeScaleDiff * partSnakeIndex / snake.length
        drawCellParams.colorProgress = snake.length !== 1
            ? partSnakeIndex / (snake.length - 1)
            : 0;
        drawWrappedSnakeCell(drawCellParams, snake[partSnakeIndex], stepPercentage)
    }
}

function drawWrappedSnakeCell(drawCellParams: DrawCellParams, snakeCell: SnakeCell, stepPercentage: number) {
    drawCellParams.cellX = snakeCell.x + snakeCell.dir.x * stepPercentage;
    drawCellParams.cellY = snakeCell.y + snakeCell.dir.y * stepPercentage;

    drawSnakeCell(drawCellParams);

    drawCellParams.cellX -= snakeCell.dir.x * getFieldWidth()
    drawCellParams.cellY -= snakeCell.dir.y * getFieldHeight()

    drawSnakeCell(drawCellParams);
}