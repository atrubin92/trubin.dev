import * as Settings from "../settings/Settings";
import { canvasWidth, canvasHeight, context } from "_CanvasContext";

export function drawGrid() {
    const boxWidth = Settings.getBoxWidth()
    const boxHeight = Settings.getBoxHeight()

    const halfBoxWidth = Settings.getHalfBoxWidth()
    const halfBoxHeight = Settings.getHalfBoxHeight()

    context.strokeStyle = "blue";

    for (let cellCenterX = halfBoxWidth; cellCenterX < canvasWidth(); cellCenterX += boxWidth) {
        drawLine(cellCenterX, 0, cellCenterX, canvasHeight());
    }

    for (let cellCenterY = halfBoxHeight; cellCenterY < canvasHeight(); cellCenterY += boxHeight) {
        drawLine(0, cellCenterY, canvasWidth(), cellCenterY);
    }
}

function drawLine(x1: number, y1: number, x2: number, y2: number) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
