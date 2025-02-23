import { SnakeCell } from "./SnakeCell";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

export const fieldWidth = 7;
export const fieldHeight = 5;

const boxWidth = canvas.width / fieldWidth;
const halfBoxWidth = boxWidth / 2;

const boxHeight = canvas.height / fieldHeight;
const halfBoxHeight = boxHeight / 2;

export function draw(snake: SnakeCell[], food: SnakeCell): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid();

    ctx.fillStyle = "green";
    for (const part of snake) {
        ctx.fillRect(part.x * boxWidth, part.y * boxHeight, boxWidth, boxHeight);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * boxWidth, food.y * boxHeight, boxWidth, boxHeight);
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