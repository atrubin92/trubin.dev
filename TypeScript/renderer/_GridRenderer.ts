import * as Settings from "../settings/Settings";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

export function drawGrid() {
    const boxWidth = Settings.getBoxWidth()
    const boxHeight = Settings.getBoxHeight()

    const halfBoxWidth = Settings.getHalfBoxWidth()
    const halfBoxHeight = Settings.getHalfBoxHeight()

    ctx.strokeStyle = "blue";

    for (let cellCenterX = halfBoxWidth; cellCenterX < canvas.width; cellCenterX += boxWidth) {
        drawLine(cellCenterX, 0, cellCenterX, canvas.height);
    }

    for (let cellCenterY = halfBoxHeight; cellCenterY < canvas.height; cellCenterY += boxHeight) {
        drawLine(0, cellCenterY, canvas.width, cellCenterY);
    }
}

function drawLine(x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
