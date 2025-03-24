import { getBoxWidth, getBoxHeight, getHalfBoxWidth, getHalfBoxHeight } from "../../settings/Settings"
import { context } from "../_CanvasContext"

export function drawCell(partX: number, partY: number, color: string, sizePercentage: number) {
    const centerX = partX * getBoxWidth() + getHalfBoxWidth()
    const centerY = partY * getBoxHeight() + getHalfBoxHeight()

    const radiusX = getHalfBoxWidth() * sizePercentage
    const radiusY = getHalfBoxHeight() * sizePercentage

    context.fillStyle = color
    context.beginPath()
    context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2)
    context.fill()
}