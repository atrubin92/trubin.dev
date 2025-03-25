import { getBoxWidth, getBoxHeight, getHalfBoxWidth, getHalfBoxHeight } from "../../settings/Settings";
import { context } from "../_CanvasContext";

export function drawCell(partX: number, partY: number, color: string, sizePercentage: number) {
    const width = getBoxWidth() * sizePercentage;
    const height = getBoxHeight() * sizePercentage;

    const x = partX * getBoxWidth() + getHalfBoxWidth() - width / 2;
    const y = partY * getBoxHeight() + getHalfBoxHeight() - height / 2;

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
