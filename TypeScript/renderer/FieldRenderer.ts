import { SimpleCell } from "../entiries/cell/SimpleCell";
import { SnakeCell } from "../entiries/cell/SnakeCell";
import { drawGrid } from "./_GridRenderer";
import { drawFood } from "./_FoodRenderer";
import { drawSnake } from "./_SnakeRenderer";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

export function draw(snakeArray: SnakeCell[], foodArray: SimpleCell[], stepPercentage: number = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawGrid()
    drawFood(foodArray)
    drawSnake(snakeArray, stepPercentage)
}
