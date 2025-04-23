import { blockInvalidKeys } from "../utils/NumberInputUtil";

const slider = document.getElementById('canvasSizeSlider') as HTMLInputElement;
const sliderValue = document.getElementById('canvasSizeValue') as HTMLElement;

slider.addEventListener('input', () => {
    sliderValue.textContent = slider.value;
});

slider.addEventListener('keydown', blockInvalidKeys)

export function getCanvasSize(): number {
    return parseInt(slider.value, 10)
}
