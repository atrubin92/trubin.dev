import * as SnakeHead from "./SnakeHead";

interface SnakeCell {
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

let snake: SnakeCell[];
let food: SnakeCell;

let currentHeadStep = SnakeHead.Step.Right;

startGame();
main();

function startGame(){
  snake = [newCell()];
  food = newCell();
}

function main(): void {
  update();
  draw();
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
  const [dx, dy] = SnakeHead.getOffsets(currentHeadStep) 

  const newHeadX = (snake[0].x + dx + fieldWidth) % fieldWidth;
  const newHeadY = (snake[0].y + dy + fieldHeight) % fieldHeight;

  return { x: newHeadX, y: newHeadY };
}

function isGameOver(newHead: SnakeCell): boolean {
  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
      return true;
    }
  }

  return false;
}

function newCell(): SnakeCell {
  const x = Math.floor(Math.random() * fieldWidth);
  const y = Math.floor(Math.random() * fieldHeight);

  return { x: x, y: y }
}

function draw(): void {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = "green";
  for (const part of snake) {
    context.fillRect(part.x * boxSize, part.y * boxSize, boxSize, boxSize);
  }
  context.fillStyle = "red";
  context.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event: KeyboardEvent): void {
  currentHeadStep = SnakeHead.changeStep(event.key, currentHeadStep)
}
