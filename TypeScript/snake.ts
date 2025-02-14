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

let snake: SnakePart[] = [{ x: 10, y: 10 }];

let foodX = 15;
let foodY = 15;

let currentHeadStep = SnakeHead.Step.Right;

placeFood();
main();

function main(): void {
  update();
  draw();
  setTimeout(main, 100);
}

function update(): void {
  const [dx, dy] = SnakeHead.getOffsets(currentHeadStep) 

  const head: SnakePart = {
    x: snake[0].x + dx,
    y: snake[0].y + dy,
  };

  if (head.x < 0) {
    head.x = (canvasWidth / boxSize) - 1;
  } else if (head.x >= canvasWidth / boxSize) {
    head.x = 0;
  }

  if (head.y < 0) {
    head.y = (canvasHeight / boxSize) - 1;
  } else if (head.y >= canvasHeight / boxSize) {
    head.y = 0;
  }

  if (head.x === foodX && head.y === foodY) {
    placeFood();
  } else {
    snake.pop();
  }

  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      snake = [{ x: 10, y: 10 }];
      placeFood();
      return;
    }
  }

  snake.unshift(head);
}

function placeFood(): void {
  foodX = Math.floor(Math.random() * (canvasWidth / boxSize));
  foodY = Math.floor(Math.random() * (canvasHeight / boxSize));
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
