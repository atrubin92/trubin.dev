import { DrawCellParams } from "./entiries/DrawCellParams";
import { SnakeCellType } from "./entiries/SnakeCellType";
import { drawSnakeCell } from "./renderer/snake-cell/SnakeCellRenderer";

export function drawCellTypeCanvas() {
    const previewMap: Record<string, SnakeCellType> = {
        previewSquare: SnakeCellType.SQUARE,
        previewRounded: SnakeCellType.ROUNDED,
        previewCircle: SnakeCellType.CIRCLE,
        previewStar: SnakeCellType.STAR,
    };

    for (const [canvasId, snakeCellType] of Object.entries(previewMap)) {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

        const drawCellParams = new DrawCellParams()
        drawCellParams.context = canvas.getContext("2d")
        drawCellParams.snakeCellType = snakeCellType
        drawCellParams.cellX = 0
        drawCellParams.cellY = 0
        drawCellParams.boxWidth = canvas.width
        drawCellParams.boxHeight = canvas.height
        drawCellParams.sizeScale = 1

        drawSnakeCell(drawCellParams)
    }
}