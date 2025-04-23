import { getCanvasSize, updateBoxSize } from "../settings/Settings";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
export const context = canvas.getContext("2d");

if (!context) {
    throw new Error("Could not get 2D context from canvas.");
}

export function canvasWidth(): number {
    return canvas.width;
}

export function canvasHeight(): number {
    return canvas.height;
}

export function clearCanvas(): void {
    context!.clearRect(0, 0, canvas.width, canvas.height);
}

export function updateCanvasSize(): void {
    canvas.width = getCanvasSize()
    canvas.height = getCanvasSize()
    updateBoxSize()
}