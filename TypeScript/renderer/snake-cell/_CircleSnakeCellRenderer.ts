import { DrawCellParams } from "../../entiries/DrawCellParams"

export function drawCell(drawCellParams: DrawCellParams) {
    const {
        context,
        cellX, cellY,
        boxWidth, boxHeight,
        halfBoxWidth, halfBoxHeight,
        color, sizeScale: sizePercentage
    } = drawCellParams;

    const centerX = cellX * boxWidth + halfBoxWidth
    const centerY = cellY * boxHeight + halfBoxHeight

    const radiusX = halfBoxWidth * sizePercentage
    const radiusY = halfBoxHeight * sizePercentage

    context.fillStyle = color
    context.beginPath()
    context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2)
    context.fill()
}