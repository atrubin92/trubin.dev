export function getCellColorArray(): string[] {
    return Array.from(document.querySelectorAll<HTMLInputElement>(".snakeColorInput"))
        .map(input => input.value);
}

const colorList = document.getElementById("colorList") as HTMLDivElement;
const addColorButton = document.getElementById("addColorButton") as HTMLButtonElement;

const INITIAL_COLOR_COUNT = 3;

for (let i = 0; i < INITIAL_COLOR_COUNT; i++) {
    addColorPicker();
}

addColorButton.addEventListener("click", () => addColorPicker());

function addColorPicker() {
    const colorWrapper = document.createElement("div");
    colorWrapper.style.display = "flex";
    colorWrapper.style.alignItems = "center";
    colorWrapper.style.gap = "5px";
    colorWrapper.style.marginTop = "5px";

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = getRandomColor();
    colorInput.classList.add("snakeColorInput");

    const removeButton = document.createElement("button");
    removeButton.innerText = "❌";
    removeButton.style.border = "none";
    removeButton.style.background = "transparent";
    removeButton.style.cursor = "pointer";

    removeButton.addEventListener("click", () => {
        if (colorList.children.length > 1) {
            colorWrapper.remove();
            updateRemoveButtons();
        }
    });

    colorWrapper.appendChild(colorInput);
    colorWrapper.appendChild(removeButton);
    colorList.appendChild(colorWrapper);

    updateRemoveButtons();
}

function updateRemoveButtons() {
    const removeButtons = colorList.querySelectorAll("button");
    removeButtons.forEach(button => {
        button.disabled = colorList.children.length === 1;
        button.style.opacity = colorList.children.length === 1 ? "0.5" : "1";
        button.style.cursor = colorList.children.length === 1 ? "default" : "pointer";
    });
}

function getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}
