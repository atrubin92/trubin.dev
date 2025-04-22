import * as BoxSize from "./_BoxSizeSetting"

const slider = document.getElementById('canvasSizeSlider') as HTMLInputElement;
const sliderValue = document.getElementById('canvasSizeValue') as HTMLElement;

slider.addEventListener('input', () => {
  sliderValue.textContent = slider.value;
  BoxSize.updateBoxSize()
});
