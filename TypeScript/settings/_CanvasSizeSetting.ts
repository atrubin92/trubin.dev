const slider = document.getElementById('canvasSizeSlider') as HTMLInputElement;
const sliderValue = document.getElementById('canvasSizeValue') as HTMLElement;

slider.addEventListener('input', () => {
    sliderValue.textContent = slider.value;
});

export function getCanvasSize(): number {
    return parseInt(slider.value, 10)
}
