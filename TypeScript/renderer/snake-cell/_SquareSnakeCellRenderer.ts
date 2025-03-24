import { getBoxWidth, getBoxHeight, getHalfBoxWidth, getHalfBoxHeight } from "../../settings/Settings";
import { context } from "../_CanvasContext";

export function drawSnakeCell(partX: number, partY: number, snakeCellScale: number) {
    drawCell(partX, partY, "green", snakeCellScale)
    drawCell(partX, partY, "rgb(128, 0, 0)", 0.5 * snakeCellScale)
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