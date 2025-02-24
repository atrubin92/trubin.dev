import * as SnakeHead from "./SnakeHead";
import * as FieldCanvas from "./FieldCanvas";
import { SnakeCell } from "./SnakeCell";

const FRAME_DURATION = 300;
let lastTime = 0;

let snake: SnakeCell[];
let food: SnakeCell;

createInitialData();
requestAnimationFrame(mainCanvasLoop);

function createInitialData() {
    snake = [createCell()];
    snake[0] = calcNewHead();

    food = createCell();
}

function mainCanvasLoop(timestamp: number): void {
    const timeSinceLastFrame = timestamp - lastTime;

    if (timeSinceLastFrame >= FRAME_DURATION) {
        updateHeadPosition();
        FieldCanvas.draw(snake, food);

        lastTime = Math.floor(timestamp / FRAME_DURATION) * FRAME_DURATION
    } else {
        const stepPercentage = timeSinceLastFrame / FRAME_DURATION;
        FieldCanvas.draw(snake, food, stepPercentage);
    }

    requestAnimationFrame(mainCanvasLoop);
}

function updateHeadPosition(): void {
    const newHead = calcNewHead();

    if (newHead.x === food.x && newHead.y === food.y) {
        while (
            snake.some(part => part.x === food.x && part.y === food.y) ||
            newHead.x === food.x && newHead.y === food.y
        ) {
            food = createCell();
        }
    } else {
        snake.pop();
    }

    if (isGameOver(newHead)) {
        createInitialData();
        return;
    }

    snake.unshift(newHead);
}

function createCell(): SnakeCell {
    return SnakeCell.create(FieldCanvas.fieldWidth, FieldCanvas.fieldHeight);
}

function calcNewHead() {
    const previousHeadDirection = SnakeHead.getOffsets()

    const newHeadX = (snake[0].x + previousHeadDirection.x + FieldCanvas.fieldWidth) % FieldCanvas.fieldWidth;
    const newHeadY = (snake[0].y + previousHeadDirection.y + FieldCanvas.fieldHeight) % FieldCanvas.fieldHeight;

    SnakeHead.updateCurrentStep();
    const currentHeadDirection = SnakeHead.getOffsets()

    return { x: newHeadX, y: newHeadY, dir: currentHeadDirection };
}

function isGameOver(newHead: SnakeCell): boolean {
    return snake.some(part => part.x === newHead.x && part.y === newHead.y);
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event: KeyboardEvent): void {
    SnakeHead.changeStep(event.key);
}
