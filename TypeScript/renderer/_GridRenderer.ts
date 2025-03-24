import { canvasWidth, canvasHeight, context } from "./_CanvasContext";
import { getBoxWidth, getBoxHeight, getHalfBoxWidth, getHalfBoxHeight } from "../settings/Settings";

export function drawGrid() {
    context.strokeStyle = "blue";

    for (let cellCenterX = getHalfBoxWidth(); cellCenterX < canvasWidth(); cellCenterX += getBoxWidth()) {
        drawLine(cellCenterX, 0, cellCenterX, canvasHeight());
    }

    for (let cellCenterY = getHalfBoxHeight(); cellCenterY < canvasHeight(); cellCenterY += getBoxHeight()) {
        drawLine(0, cellCenterY, canvasWidth(), cellCenterY);
    }
}

function drawLine(x1: number, y1: number, x2: number, y2: number) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
