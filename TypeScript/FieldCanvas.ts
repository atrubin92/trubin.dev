import { SnakeCell } from "./SnakeCell";
import * as SnakeHead from "./SnakeHead";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

export const fieldWidth = 7;
export const fieldHeight = 5;

const boxWidth = canvas.width / fieldWidth;
const halfBoxWidth = boxWidth / 2;
const quarterBoxWidth = boxWidth / 4;

const boxHeight = canvas.height / fieldHeight;
const halfBoxHeight = boxHeight / 2;
const quarterBoxHeight = boxHeight / 4;

export function draw(snake: SnakeCell[], food: SnakeCell, stepPercentage: number = 0): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid();

    ctx.fillStyle = "red";
    ctx.fillRect(food.x * boxWidth, food.y * boxHeight, boxWidth, boxHeight);

    for (let partSnakeIndex = snake.length - 1; partSnakeIndex >= 1; partSnakeIndex--) {
        const stepX = snake[partSnakeIndex - 1].x - snake[partSnakeIndex].x
        const stepY = snake[partSnakeIndex - 1].y - snake[partSnakeIndex].y

        drawPartSnake(snake[partSnakeIndex], stepX, stepY, stepPercentage)
    }

    const [stepX, stepY] = SnakeHead.getOffsets();
    drawPartSnake(snake[0], stepX, stepY, stepPercentage);
}

function drawPartSnake(snakeCell: SnakeCell, stepX: number, stepY: number, stepPercentage: number) {
    const newHeadX = (snakeCell.x + stepX + fieldWidth) % fieldWidth;
    const newHeadY = (snakeCell.y + stepY + fieldHeight) % fieldHeight;

    const partX = newHeadX * stepPercentage + snakeCell.x * (1 - stepPercentage);
    const partY = newHeadY * stepPercentage + snakeCell.y * (1 - stepPercentage);

    ctx.fillStyle = "green";
    ctx.fillRect(partX * boxWidth, partY * boxHeight, boxWidth, boxHeight);
    ctx.fillStyle = "rgb(128, 0, 0)";
    ctx.fillRect(
        partX * boxWidth + quarterBoxWidth, partY * boxHeight + quarterBoxHeight,
        halfBoxWidth, halfBoxHeight
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