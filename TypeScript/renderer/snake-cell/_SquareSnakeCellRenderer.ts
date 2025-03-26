import { DrawCellParams } from "../../entiries/DrawCellParams";

export function drawCell(drawCellParams: DrawCellParams) {
    const {
        context,
        cellX, cellY,
        boxWidth, boxHeight,
        halfBoxWidth, halfBoxHeight,
        color, sizeScale
    } = drawCellParams;

    context.fillStyle = color
    context.fillRect(
        cellX * boxWidth + halfBoxWidth * (1 - sizeScale),
        cellY * boxHeight + halfBoxHeight * (1 - sizeScale),
        boxWidth * sizeScale,
        boxHeight * sizeScale
    )
}