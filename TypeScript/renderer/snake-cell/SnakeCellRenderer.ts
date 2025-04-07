import * as SquareSnakeCellRenderer from "./_SquareSnakeCellRenderer";
import * as RoundedSnakeCellRenderer from "./_RoundedSnakeCellRenderer";
import * as CircleSnakeCellRenderer from "./_CircleSnakeCellRenderer";
import * as StarSnakeCellRenderer from "./_StarSnakeCellRenderer";
import { getCellColorArray } from "../../settings/Settings";
import { SnakeCellType } from "../../entiries/SnakeCellType";
import { DrawCellParams } from "../../entiries/DrawCellParams";
import { SnakeColor } from "../../entiries/SnakeColor";
import { interpolateColor } from "../../utils/ColorUtil";

export function drawSnakeCell(drawCellParams: DrawCellParams) {
    const initialSizeScale = drawCellParams.sizeScale

    const colorArray: SnakeColor[] = getCellColorArray()
    for (let colorIndex = 0; colorIndex < colorArray.length; colorIndex++) {
        drawCellParams.color = interpolateColor(
            colorArray[colorIndex].head,
            colorArray[colorIndex].tail,
            drawCellParams.colorProgress
        )

        const colorPartScale = 1 - colorIndex / colorArray.length
        drawCellParams.sizeScale = initialSizeScale * colorPartScale

        drawSpecificSnakeCell(drawCellParams)
    }
    drawCellParams.sizeScale = initialSizeScale
}

function drawSpecificSnakeCell(drawCellParams: DrawCellParams) {
    switch (drawCellParams.snakeCellType) {
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
            StarSnakeCellRenderer.drawCell(drawCellParams)
            break;
    }
}