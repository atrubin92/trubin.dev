import { getBoxWidth, getBoxHeight, getHalfBoxWidth, getHalfBoxHeight } from "../../settings/Settings";
import { context } from "../_CanvasContext";

export function drawSnakeCell(partX: number, partY: number, colorArray: string[], snakeCellScale: number) {
    for (let colorIndex = 0; colorIndex < colorArray.length; colorIndex++){
        const colorItem = colorArray[colorIndex]
        const colorPartScale = 1 - colorIndex / colorArray.length
        const layerScale = snakeCellScale * colorPartScale

        drawCell(partX, partY, colorItem, layerScale)
    }
}

function drawCell(partX: number, partY: number, color: string, sizePercentage: number = 1) {
    context.fillStyle = color
    context.fillRect(
        partX * getBoxWidth() + getHalfBoxWidth() * (1 - sizePercentage),
        partY * getBoxHeight() + getHalfBoxHeight() * (1 - sizePercentage),
        getBoxWidth() * sizePercentage,
        getBoxHeight() * sizePercentage
    )
}