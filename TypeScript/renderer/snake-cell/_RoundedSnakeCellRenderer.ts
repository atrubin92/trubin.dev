import { DrawCellParams } from "../../entiries/DrawCellParams";

export function drawCell(drawCellParams: DrawCellParams) {
    const {
        context,
        cellX, cellY,
        boxWidth, boxHeight,
        halfBoxWidth, halfBoxHeight,
        color, sizeScale
    } = drawCellParams;

    const width = boxWidth * sizeScale
    const height = boxHeight * sizeScale

    const x = cellX * boxWidth + halfBoxWidth - width / 2;
    const y = cellY * boxHeight + halfBoxHeight - height / 2;

    const radius = Math.min(width / 3, height / 3);

    context.fillStyle = color;
    context.beginPath();

    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.arcTo(x + width, y, x + width, y + radius, radius);
    context.lineTo(x + width, y + height - radius);
    context.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    context.lineTo(x + radius, y + height);
    context.arcTo(x, y + height, x, y + height - radius, radius);
    context.lineTo(x, y + radius);
    context.arcTo(x, y, x + radius, y, radius);

    context.closePath();
    context.fill();
}
