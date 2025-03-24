import * as SquareSnakeCellRenderer from "./_SquareSnakeCellRenderer";

export function drawSnakeCell(partX: number, partY: number, snakeCellScale: number) {
    const colorArray: string[] = ["green", "rgb(128, 0, 0)", "blue", "red"]
    for (let colorIndex = 0; colorIndex < colorArray.length; colorIndex++){
        const colorItem = colorArray[colorIndex]
        const colorPartScale = 1 - colorIndex / colorArray.length
        const layerScale = snakeCellScale * colorPartScale

        drawPartSnakeCell(partX, partY, colorItem, layerScale)
    }
}

function drawPartSnakeCell(partX: number, partY: number, color: string, sizePercentage: number){
    SquareSnakeCellRenderer.drawCell(partX, partY, color, sizePercentage)
}