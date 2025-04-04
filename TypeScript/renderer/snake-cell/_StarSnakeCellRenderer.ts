import { DrawCellParams } from "../../entiries/DrawCellParams";

export function drawCell(drawCellParams: DrawCellParams) {
    const {
        context,
        cellX, cellY,
        boxWidth, boxHeight,
        halfBoxWidth, halfBoxHeight,
        color, sizeScale
    } = drawCellParams;

    const innerRadiusScale = 0.6

    const centerX = cellX * boxWidth + halfBoxWidth
    const centerY = cellY * boxHeight + halfBoxHeight

    const outerWidthRadius = halfBoxWidth * sizeScale
    const outerHeightRadius = halfBoxHeight * sizeScale
    const innerWidthRadius = outerWidthRadius * innerRadiusScale
    const innerHeightRadius = outerHeightRadius * innerRadiusScale

    const spikes = 8;

    const step = Math.PI / spikes;
    let rotation = 0;

    context.beginPath();
    context.moveTo(
        centerX + Math.cos(rotation) * outerWidthRadius,
        centerY + Math.sin(rotation) * outerHeightRadius
    );

    for (let i = 0; i < spikes * 2; i++) {
        const widthRadius = i % 2 === 0 ? outerWidthRadius : innerWidthRadius;
        const hegihtRadius = i % 2 === 0 ? outerHeightRadius : innerHeightRadius;
        const x = centerX + Math.cos(rotation) * widthRadius;
        const y = centerY + Math.sin(rotation) * hegihtRadius;
        context.lineTo(x, y);
        rotation += step;
    }

    context.closePath();
    context.fillStyle = color;
    context.fill();
}
