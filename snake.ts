// snake.ts

// Represent each cell the snake occupies
interface SnakePart {
  x: number;
  y: number;
}

// Get canvas and 2D context
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// Dimensions
const canvasWidth = canvas.width;   // 400 (defined in index.html)
const canvasHeight = canvas.height; // 400
const boxSize = 20;                 // Size of each 'cell'

// Snake initial state
let snake: SnakePart[] = [{ x: 10, y: 10 }]; 
let dx = 0; // horizontal velocity (-1, 0, 1)
let dy = 0; // vertical velocity   (-1, 0, 1)

// Food position (randomly placed)
let foodX = 15;
let foodY = 15;

// Start the game
main();

// Game loop
function main(): void {
  update();
  draw();
  // Call main() again every 100ms
  setTimeout(main, 100);
}

// Update the game state: move snake, check collisions, etc.
function update(): void {
  // Calculate new head position
  const head: SnakePart = {
    x: snake[0].x + dx,
    y: snake[0].y + dy,
  };

  // Wrap around if hitting canvas boundary (optional; otherwise "game over")
  // Horizontal wrap
  if (head.x < 0) {
    head.x = (canvasWidth / boxSize) - 1;
  } else if (head.x >= canvasWidth / boxSize) {
    head.x = 0;
  }
  // Vertical wrap
  if (head.y < 0) {
    head.y = (canvasHeight / boxSize) - 1;
  } else if (head.y >= canvasHeight / boxSize) {
    head.y = 0;
  }

  // Check if snake eats the food
  if (head.x === foodX && head.y === foodY) {
    // Grow by not popping the tail
    placeFood();
  } else {
    // Remove the last part of the snake body
    snake.pop();
  }

  // Check collision with snake's own body
  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      // Game over - reset the snake
      snake = [{ x: 10, y: 10 }];
      dx = 0;
      dy = 0;
      placeFood();
      return;
    }
  }

  // Add new head to the snake
  snake.unshift(head);
}

// Randomly place food somewhere on the grid
function placeFood(): void {
  foodX = Math.floor(Math.random() * (canvasWidth / boxSize));
  foodY = Math.floor(Math.random() * (canvasHeight / boxSize));
}

// Draw everything on the canvas
function draw(): void {
  // Clear canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Draw snake
  ctx.fillStyle = "green";
  for (const part of snake) {
    ctx.fillRect(part.x * boxSize, part.y * boxSize, boxSize, boxSize);
  }

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(foodX * boxSize, foodY * boxSize, boxSize, boxSize);
}

// Listen for arrow keys to change snake direction
document.addEventListener("keydown", changeDirection);

function changeDirection(event: KeyboardEvent): void {
  switch (event.key) {
    case "ArrowUp":
      if (dy !== 1) {
        dx = 0;
        dy = -1;
      }
      break;
    case "ArrowDown":
      if (dy !== -1) {
        dx = 0;
        dy = 1;
      }
      break;
    case "ArrowLeft":
      if (dx !== 1) {
        dx = -1;
        dy = 0;
      }
      break;
    case "ArrowRight":
      if (dx !== -1) {
        dx = 1;
        dy = 0;
      }
      break;
  }
}
