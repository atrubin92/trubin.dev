import { SnakeCell } from "./SnakeCell";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")!;

const boxSize = 20;

export const fieldWidth = canvas.width / boxSize;
export const fieldHeight = canvas.height / boxSize;

export function draw(snake: SnakeCell[], food: SnakeCell): void {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "green";
    for (const part of snake) {
        context.fillRect(part.x * boxSize, part.y * boxSize, boxSize, boxSize);
    }
    context.fillStyle = "red";
    context.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
}