import { SimpleCell } from "../entiries/cell/SimpleCell";
import { SnakeCell } from "../entiries/cell/SnakeCell";
import * as Settings from "../settings/Settings";
import { drawGrid } from "./_GridRenderer";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

let boxWidth = 0
let halfBoxWidth = 0

let boxHeight = 0
let halfBoxHeight = 0

export function draw(snakeArray: SnakeCell[], foodArray: SimpleCell[], stepPercentage: number = 0) {
    calcBoxSize()

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawGrid(ctx, canvas.width, canvas.height, boxWidth, boxHeight)
    drawFood(foodArray)
    drawSnake(snakeArray, stepPercentage)
}

function calcBoxSize() {
    boxWidth = canvas.width / Settings.getFieldWidth();
    halfBoxWidth = boxWidth / 2;

    boxHeight = canvas.height / Settings.getFieldHeight();
    halfBoxHeight = boxHeight / 2;
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
    ctx.fillStyle = color
    ctx.fillRect(
        partX * boxWidth + halfBoxWidth - halfBoxWidth * sizePercentage,
        partY * boxHeight + halfBoxHeight - halfBoxHeight * sizePercentage,
        boxWidth * sizePercentage,
        boxHeight * sizePercentage
    )
}