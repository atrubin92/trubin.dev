import { SnakeCellType } from "../../entiries/SnakeCellType";
import * as SquareSnakeCellRenderer from "./_SquareSnakeCellRenderer";
import * as RoundedSnakeCellRenderer from "./_RoundedSnakeCellRenderer";
import * as CircleSnakeCellRenderer from "./_CircleSnakeCellRenderer";
import * as StarSnakeCellRenderer from "./_StarSnakeCellRenderer";
import { DrawCellParams } from "../../entiries/DrawCellParams";

export function drawSnakeCell(drawCellParams: DrawCellParams) {
    const initialSizeScale = drawCellParams.sizeScale

    const colorArray: string[] = ["green", "rgb(128, 0, 0)", "blue", "red"]
    for (let colorIndex = 0; colorIndex < colorArray.length; colorIndex++) {
        const colorPartScale = 1 - colorIndex / colorArray.length

        drawCellParams.color = colorArray[colorIndex]
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