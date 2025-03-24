import { getBoxWidth, getBoxHeight, getHalfBoxWidth, getHalfBoxHeight } from "../../settings/Settings";
import { context } from "../_CanvasContext";

export function drawCell(partX: number, partY: number, color: string, sizePercentage: number) {
    context.fillStyle = color
    context.fillRect(
        partX * getBoxWidth() + getHalfBoxWidth() * (1 - sizePercentage),
        partY * getBoxHeight() + getHalfBoxHeight() * (1 - sizePercentage),
        getBoxWidth() * sizePercentage,
        getBoxHeight() * sizePercentage
    )
}