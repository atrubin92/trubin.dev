export function drawGrid(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number,
    boxWidth: number,
    boxHeight: number
) {
    const halfBoxWidth = boxWidth / 2;
    const halfBoxHeight = boxHeight / 2;

    ctx.strokeStyle = "blue";

    for (let cellCenterX = halfBoxWidth; cellCenterX < canvasWidth; cellCenterX += boxWidth) {
        drawLine(ctx, cellCenterX, 0, cellCenterX, canvasHeight);
    }

    for (let cellCenterY = halfBoxHeight; cellCenterY < canvasHeight; cellCenterY += boxHeight) {
        drawLine(ctx, 0, cellCenterY, canvasWidth, cellCenterY);
    }
}

function drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
