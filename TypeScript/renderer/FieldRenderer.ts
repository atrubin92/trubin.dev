import { SimpleCell } from "../entiries/cell/SimpleCell";
import { SnakeCell } from "../entiries/cell/SnakeCell";
import { drawGrid } from "./_GridRenderer";
import { drawFood } from "./_FoodRenderer";
import { drawSnake } from "./_SnakeRenderer";
import { clearCanvas, updateCanvasSize } from "./_CanvasContext";

export function draw(snakeArray: SnakeCell[], foodArray: SimpleCell[], stepPercentage: number = 0) {
    clearCanvas()

    updateCanvasSize()

    drawGrid()
    drawFood(foodArray)
    drawSnake(snakeArray, stepPercentage)
}
