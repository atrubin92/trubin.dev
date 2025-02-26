import { SnakeCell } from "./SnakeCell";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

export const fieldWidth = 7;
export const fieldHeight = 5;

const boxWidth = canvas.width / fieldWidth;
const halfBoxWidth = boxWidth / 2;

const boxHeight = canvas.height / fieldHeight;
const halfBoxHeight = boxHeight / 2;

export function draw(snake: SnakeCell[], food: SnakeCell, stepPercentage: number = 0): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid();

    ctx.fillStyle = "red";
    drawCell(food.x, food.y);

    const snakeCellFixedScale = 0.7

    for (let partSnakeIndex = snake.length - 1; partSnakeIndex >= 0; partSnakeIndex--) {
        const snakeCellScale = (1 - snakeCellFixedScale) * (snake.length - partSnakeIndex) / snake.length + snakeCellFixedScale
        drawSnakeCellwithOutsidePart(snake[partSnakeIndex], stepPercentage, snakeCellScale)
    }
}

function drawSnakeCellwithOutsidePart(snakeCell: SnakeCell, stepPercentage: number, snakeCellScale: number) {
    let partX = snakeCell.x + snakeCell.dir.x * stepPercentage;
    let partY = snakeCell.y + snakeCell.dir.y * stepPercentage;

    drawSnakeCell(partX, partY, snakeCellScale);

    partX -= snakeCell.dir.x * fieldWidth;
    partY -= snakeCell.dir.y * fieldHeight;

    drawSnakeCell(partX, partY, snakeCellScale);
}

function drawSnakeCell(partX: number, partY: number, snakeCellScale: number) {
    ctx.fillStyle = "green";
    drawCell(partX, partY, snakeCellScale);
    ctx.fillStyle = "rgb(128, 0, 0)";
    drawCell(partX, partY, 0.5 * snakeCellScale);
}

function drawCell(partX: number, partY: number, sizePercentage: number = 1) {
    ctx.fillRect(
        partX * boxWidth + halfBoxWidth - halfBoxWidth * sizePercentage,
        partY * boxHeight + halfBoxHeight - halfBoxHeight * sizePercentage,
        boxWidth * sizePercentage,
        boxHeight * sizePercentage
    );
}

function drawGrid() {
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
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}