import { SnakeCell } from "./SnakeCell";

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

    for (let partSnakeIndex = snake.length - 1; partSnakeIndex >= 0; partSnakeIndex--) {
        drawPartSnake(snake[partSnakeIndex], stepPercentage)
        drawPartSnake(
            snake[partSnakeIndex], stepPercentage,
            -snake[partSnakeIndex].dir.x * fieldWidth,
            -snake[partSnakeIndex].dir.y * fieldHeight
        )
    }
}

function drawPartSnake(snakeCell: SnakeCell, stepPercentage: number, outsideX: number = 0, outsideY: number = 0) {
    const partX = snakeCell.x + snakeCell.dir.x * stepPercentage + outsideX;
    const partY = snakeCell.y + snakeCell.dir.y * stepPercentage + outsideY;

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