import * as FieldSize from "./_FieldSizeSetting";

export function updateBoxSize() {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;

    boxWidth = canvas.width / FieldSize.getFieldWidth();
    halfBoxWidth = boxWidth / 2;

    boxHeight = canvas.height / FieldSize.getFieldHeight();
    halfBoxHeight = boxHeight / 2;
}

export function getBoxWidth(): number {
    return boxWidth;
}

export function getBoxHeight(): number {
    return boxHeight;
}

export function getHalfBoxWidth(): number {
    return halfBoxWidth;
}

export function getHalfBoxHeight(): number {
    return halfBoxHeight;
}

let boxWidth = 0;
let boxHeight = 0;

let halfBoxWidth = 0;
let halfBoxHeight = 0;
