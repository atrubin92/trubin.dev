import { SimpleCell } from "../entiries/cell/SimpleCell";
import { SnakeCell } from "../entiries/cell/SnakeCell";
import * as Settings from "../settings/Settings";
import { drawGrid } from "./_GridRenderer";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

export function draw(snakeArray: SnakeCell[], foodArray: SimpleCell[], stepPercentage: number = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawGrid()
    drawFood(foodArray)
    drawSnake(snakeArray, stepPercentage)
}

function drawFood(foodArray: SimpleCell[]) {
    if (!foodArray) return

    for (const foodItem of foodArray) {
        drawCell(foodItem.x, foodItem.y, "red")
    }
}

function drawSnake(snake: SnakeCell[], stepPercentage: number = 0) {
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

    partX -= snakeCell.dir.x * Settings.getFieldWidth()
    partY -= snakeCell.dir.y * Settings.getFieldHeight()

    drawSnakeCell(partX, partY, snakeCellScale);
}

function drawSnakeCell(partX: number, partY: number, snakeCellScale: number) {
    drawCell(partX, partY, "green", snakeCellScale)
    drawCell(partX, partY, "rgb(128, 0, 0)", 0.5 * snakeCellScale)
}

function drawCell(partX: number, partY: number, color: string, sizePercentage: number = 1) {
    const boxWidth = Settings.getBoxWidth()
    const boxHeight = Settings.getBoxHeight()

    const halfBoxWidth = Settings.getHalfBoxWidth()
    const halfBoxHeight = Settings.getHalfBoxHeight()

    ctx.fillStyle = color
    ctx.fillRect(
        partX * boxWidth + halfBoxWidth - halfBoxWidth * sizePercentage,
        partY * boxHeight + halfBoxHeight - halfBoxHeight * sizePercentage,
        boxWidth * sizePercentage,
        boxHeight * sizePercentage
    )
}