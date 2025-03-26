import { DrawCellParams } from "../../entiries/DrawCellParams";

export function drawCell(drawCellParams: DrawCellParams) {
    const {
        context,
        cellX, cellY,
        boxWidth, boxHeight,
        halfBoxWidth, halfBoxHeight,
        color, sizeScale
    } = drawCellParams;

    const centerX = cellX * boxWidth + halfBoxWidth
    const centerY = cellY * boxHeight + halfBoxHeight

    const outerRadius = Math.min(halfBoxWidth, halfBoxHeight) * sizeScale
    const innerRadius = outerRadius * 0.6;
    const spikes = 8;

    const step = Math.PI / spikes;
    let rotation = 0;

    context.beginPath();
    context.moveTo(
        centerX + Math.cos(rotation) * outerRadius,
        centerY + Math.sin(rotation) * outerRadius
    );

    for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = centerX + Math.cos(rotation) * radius;
        const y = centerY + Math.sin(rotation) * radius;
        context.lineTo(x, y);
        rotation += step;
    }

    context.closePath();
    context.fillStyle = color;
    context.fill();
}
