import { FieldCell } from "./entiries/FieldCell";
import { SnakeCell } from "./entiries/SnakeCell";
import * as Settings from "./Settings";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

let boxWidth = 0
let halfBoxWidth = 0

let boxHeight = 0
let halfBoxHeight = 0

export function draw(snake: SnakeCell[], food?: FieldCell, stepPercentage: number = 0) {
    calcBoxSize()

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawGrid()
    drawFood(food)
    drawSnake(snake, stepPercentage)
}

function calcBoxSize() {
    boxWidth = canvas.width / Settings.getFieldWidth();
    halfBoxWidth = boxWidth / 2;

    boxHeight = canvas.height / Settings.getFieldHeight();
    halfBoxHeight = boxHeight / 2;
}

function drawFood(food?: FieldCell) {
    if (!food) return

    drawCell(food.x, food.y, "red")
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

function drawGrid() {
    ctx.strokeStyle = 'blue';
    for (let cellCenterX = halfBoxWidth; cellCenterX < canvas.width; cellCenterX += boxWidth) {
        drawLine(cellCenterX, 0, cellCenterX, canvas.height)
    }

    for (let cellCenterY = halfBoxHeight; cellCenterY < canvas.height; cellCenterY += boxHeight) {
        drawLine(0, cellCenterY, canvas.width, cellCenterY)
    }
}

function drawLine(x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}