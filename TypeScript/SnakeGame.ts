import * as SnakeHead from "./SnakeHead";

interface SnakePart {
  x: number;
  y: number;
}

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")!;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const boxSize = 20;

const fieldWidth = canvasWidth / boxSize;
const fieldHeight = canvasHeight / boxSize;

let snake: SnakePart[];

let foodX = 15;
let foodY = 15;

let currentHeadStep = SnakeHead.Step.Right;

startGame();
main();

function startGame(){
  const [cellX, cellY] = newCell();
  snake = [{x: cellX, y: cellY}];
  [foodX, foodY] = newCell();
}

function main(): void {
  update();
  draw();
  setTimeout(main, 100);
}

function update(): void {
  const newHead = calcNewHead()

  if (newHead.x === foodX && newHead.y === foodY) {
    [foodX, foodY] = newCell();
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
  const [dx, dy] = SnakeHead.getOffsets(currentHeadStep) 

  const newHead: SnakePart = {
    x: snake[0].x + dx,
    y: snake[0].y + dy,
  };

  if (newHead.x < 0) {
    newHead.x = fieldWidth - 1;
  } else if (newHead.x >= fieldWidth) {
    newHead.x = 0;
  }

  if (newHead.y < 0) {
    newHead.y = fieldHeight - 1;
  } else if (newHead.y >= fieldHeight) {
    newHead.y = 0;
  }

  return newHead
}

function isGameOver(newHead: SnakePart): boolean {
  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
      return true;
    }
  }

  return false;
}

function newCell(): [number, number] {
  const x = Math.floor(Math.random() * fieldWidth);
  const y = Math.floor(Math.random() * fieldHeight);

  return [x, y]
}

function draw(): void {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = "green";
  for (const part of snake) {
    context.fillRect(part.x * boxSize, part.y * boxSize, boxSize, boxSize);
  }
  context.fillStyle = "red";
  context.fillRect(foodX * boxSize, foodY * boxSize, boxSize, boxSize);
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event: KeyboardEvent): void {
  currentHeadStep = SnakeHead.changeStep(event.key, currentHeadStep)
}
