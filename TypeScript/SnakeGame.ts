import * as SnakeHead from "./SnakeHead";
import * as FieldCanvas from "./FieldCanvas";
import { SnakeCell } from "./SnakeCell";

let snake: SnakeCell[];
let food: SnakeCell;

startGame();
main();

function startGame() {
    snake = [createCell()];
    food = createCell();
}

function main(): void {
    update();
    FieldCanvas.draw(snake, food);
    setTimeout(main, 100);
}

function update(): void {
    const newHead = calcNewHead()

    if (newHead.x === food.x && newHead.y === food.y) {
        food = createCell();
    } else {
        snake.pop();
    }

    if (isGameOver(newHead)) {
        startGame();
        return;
    }

    snake.unshift(newHead);
}

function createCell(): SnakeCell {
    return SnakeCell.create(FieldCanvas.fieldWidth, FieldCanvas.fieldHeight);
}

function calcNewHead() {
    const [dx, dy] = SnakeHead.getOffsets()

    const newHeadX = (snake[0].x + dx + FieldCanvas.fieldWidth) % FieldCanvas.fieldWidth;
    const newHeadY = (snake[0].y + dy + FieldCanvas.fieldHeight) % FieldCanvas.fieldHeight;

    return { x: newHeadX, y: newHeadY };
}

function isGameOver(newHead: SnakeCell): boolean {
    return snake.some(part => part.x === newHead.x && part.y === newHead.y);
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event: KeyboardEvent): void {
    SnakeHead.changeStep(event.key);
}
