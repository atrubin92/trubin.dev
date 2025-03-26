import { SnakeCellType } from "../entiries/SnakeCellType";

export function getSnakeCellType(): SnakeCellType {
    return currentSnakeCellType;
}

initCellTypeCanvas()

let currentSnakeCellType: SnakeCellType = SnakeCellType.SQUARE;

const radios = document.querySelectorAll<HTMLInputElement>('input[name="cellType"]');

radios.forEach(radio => {
    radio.addEventListener("keydown", event => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
            event.preventDefault();
        }
    });

    radio.addEventListener("change", () => {
        const value = radio.value;

        if (Object.values(SnakeCellType).includes(value as SnakeCellType)) {
            currentSnakeCellType = value as SnakeCellType;
        }
    });
});

function initCellTypeCanvas(){
    const previewCanvasIdArray = ["previewSquare", "previewRounded", "previewCircle", "previewStar"]

    for (let canvasIdIndex = 0; canvasIdIndex < previewCanvasIdArray.length; canvasIdIndex++) {
        const canvasId = previewCanvasIdArray[canvasIdIndex];
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

        //TODO: implement the drawing the preview
    }
}