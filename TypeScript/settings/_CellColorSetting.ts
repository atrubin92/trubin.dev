export function getCellColorArray(): string[] {
    return Array.from(document.querySelectorAll<HTMLInputElement>(".snakeColorInput"))
        .filter((_, index) => index % 2 === 0)
        .map(input => input.value);
}

const colorList = document.getElementById("colorList") as HTMLDivElement;
const addColorButton = document.getElementById("addColorButton") as HTMLButtonElement;

const MIN_COLOR_COUNT = 1;
const MAX_COLOR_COUNT = 5;
const INITIAL_COLOR_COUNT = 3;

for (let i = 0; i < INITIAL_COLOR_COUNT; i++) {
    addColorPicker();
}

addColorButton.addEventListener("click", () => addColorPicker());

function addColorPicker() {
    if (colorList.children.length >= MAX_COLOR_COUNT) return;

    const colorWrapper = createColorWrapper();
    const colorInput1 = createColorInput();
    const colorInput2 = createColorInput();
    const removeButton = createRemoveButton(colorWrapper);

    colorWrapper.appendChild(colorInput1);
    colorWrapper.appendChild(colorInput2);
    colorWrapper.appendChild(removeButton);
    colorList.appendChild(colorWrapper);

    colorInput1.focus();
    updateRemoveButtons();
}

function createColorWrapper() {
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "5px";
    wrapper.style.marginTop = "5px";
    return wrapper;
}

function createColorInput() {
    const input = document.createElement("input");
    input.type = "color";
    input.value = getRandomColor();
    input.classList.add("snakeColorInput");
    return input;
}

function createRemoveButton(wrapper: HTMLDivElement) {
    const button = document.createElement("button");
    button.innerText = "❌";
    button.style.border = "none";
    button.style.background = "transparent";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
        if (colorList.children.length > MIN_COLOR_COUNT) {
            wrapper.remove();
            updateRemoveButtons();
        }
    });

    return button;
}

function updateRemoveButtons() {
    const removeButtons = colorList.querySelectorAll("button");
    const isOnlyMinColorsLeft = colorList.children.length === MIN_COLOR_COUNT;
    const isReachedMaxColors = colorList.children.length === MAX_COLOR_COUNT;

    removeButtons.forEach(button => {
        button.disabled = isOnlyMinColorsLeft;
        button.style.opacity = isOnlyMinColorsLeft ? "0.5" : "1";
        button.style.cursor = isOnlyMinColorsLeft ? "default" : "pointer";
    });

    addColorButton.disabled = isReachedMaxColors;
    addColorButton.style.opacity = isReachedMaxColors ? "0.5" : "1";
    addColorButton.style.cursor = isReachedMaxColors ? "default" : "pointer";
}

function getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}
