import { SimpleCell } from "../entiries/cell/SimpleCell";
import { getBoxWidth, getBoxHeight } from "../settings/Settings";
import { context } from "./_CanvasContext"

export function drawFood(foodArray: SimpleCell[]) {
    if (!foodArray) return

    for (const foodItem of foodArray) {
        drawCell(foodItem.x, foodItem.y, "red")
    }
}

function drawCell(partX: number, partY: number, color: string) {
    context.fillStyle = color
    context.fillRect(partX * getBoxWidth(), partY * getBoxHeight(), getBoxWidth(), getBoxHeight())
}
