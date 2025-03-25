import { getBoxWidth, getBoxHeight, getHalfBoxWidth, getHalfBoxHeight } from "../../settings/Settings";
import { context } from "../_CanvasContext";

export function drawCell(partX: number, partY: number, color: string, sizePercentage: number) {
    const centerX = partX * getBoxWidth() + getHalfBoxWidth();
    const centerY = partY * getBoxHeight() + getHalfBoxHeight();

    const outerRadius = Math.min(getHalfBoxWidth(), getHalfBoxHeight()) * sizePercentage;
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
