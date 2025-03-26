import { SnakeCellType } from "../../entiries/SnakeCellType";
import { getBoxWidth, getBoxHeight, getSnakeCellType } from "../../settings/Settings";
import * as SquareSnakeCellRenderer from "./_SquareSnakeCellRenderer";
import * as RoundedSnakeCellRenderer from "./_RoundedSnakeCellRenderer";
import * as CircleSnakeCellRenderer from "./_CircleSnakeCellRenderer";
import * as StarSnakeCellRenderer from "./_StarSnakeCellRenderer";
import { DrawCellParams } from "../../entiries/DrawCellParams";
import { context } from "../_CanvasContext";

export function drawSnakeCell(cellX: number, cellY: number, snakeCellScale: number) {
    const drawCellParams = new DrawCellParams()
    drawCellParams.context = context
    drawCellParams.cellX = cellX
    drawCellParams.cellY = cellY
    drawCellParams.boxWidth = getBoxWidth()
    drawCellParams.boxHeight = getBoxHeight()

    const colorArray: string[] = ["green", "rgb(128, 0, 0)", "blue", "red"]
    for (let colorIndex = 0; colorIndex < colorArray.length; colorIndex++) {
        const colorItem = colorArray[colorIndex]
        const colorPartScale = 1 - colorIndex / colorArray.length
        const layerScale = snakeCellScale * colorPartScale

        drawCellParams.color = colorArray[colorIndex]
        drawCellParams.sizeScale = layerScale;

        drawPartSnakeCell(cellX, cellY, colorItem, layerScale, drawCellParams)
    }
}

function drawPartSnakeCell(
    cellX: number, cellY: number, color: string, sizePercentage: number,
    drawCellParams: DrawCellParams
) {
    switch (getSnakeCellType()) {
        case SnakeCellType.SQUARE:
            SquareSnakeCellRenderer.drawCell(drawCellParams)
            break;
        case SnakeCellType.ROUNDED:
            RoundedSnakeCellRenderer.drawCell(drawCellParams)
            break;
        case SnakeCellType.CIRCLE:
            CircleSnakeCellRenderer.drawCell(drawCellParams)
            break;
        case SnakeCellType.STAR:
            StarSnakeCellRenderer.drawCell(cellX, cellY, color, sizePercentage)
            break;
    }
}