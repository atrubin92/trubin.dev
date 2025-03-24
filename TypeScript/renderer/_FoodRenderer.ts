import { SimpleCell } from "../entiries/cell/SimpleCell";
import * as Settings from "../settings/Settings";
import { context } from "_CanvasContext"

export function drawFood(foodArray: SimpleCell[]) {
    if (!foodArray) return

    for (const foodItem of foodArray) {
        drawCell(foodItem.x, foodItem.y, "red")
    }
}

function drawCell(partX: number, partY: number, color: string, sizePercentage: number = 1) {
    const boxWidth = Settings.getBoxWidth()
    const boxHeight = Settings.getBoxHeight()

    const halfBoxWidth = Settings.getHalfBoxWidth()
    const halfBoxHeight = Settings.getHalfBoxHeight()

    context.fillStyle = color
    context.fillRect(
        partX * boxWidth + halfBoxWidth - halfBoxWidth * sizePercentage,
        partY * boxHeight + halfBoxHeight - halfBoxHeight * sizePercentage,
        boxWidth * sizePercentage,
        boxHeight * sizePercentage
    )
}
