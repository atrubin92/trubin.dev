import * as SnakeHead from "./SnakeHead";
import * as FieldCanvas from "./FieldCanvas";
import { SnakeCell } from "./SnakeCell";

let snake: SnakeCell[];
let food: SnakeCell;

startGame();
main();

function startGame() {
    snake = [newCell()];
    food = newCell();
}

function main(): void {
    update();
    FieldCanvas.draw(snake, food);
    setTimeout(main, 100);
}

function update(): void {
    const newHead = calcNewHead()

    if (newHead.x === food.x && newHead.y === food.y) {
        food = newCell();
    } else {
        snake.pop();
    }

    if (isGameOver(newHead)) {
        startGame();
        return;
    }

    snake.unshift(newHead);
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

function newCell(): SnakeCell {
    const x = Math.floor(Math.random() * FieldCanvas.fieldWidth);
    const y = Math.floor(Math.random() * FieldCanvas.fieldHeight);

    return { x: x, y: y }
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event: KeyboardEvent): void {
    SnakeHead.changeStep(event.key);
}
