const colorList = document.getElementById("colorList") as HTMLDivElement;
const addColorButton = document.getElementById("addColorButton") as HTMLButtonElement;

function addColorPicker(defaultColor = "#008000") {
    const colorWrapper = document.createElement("div");
    colorWrapper.style.display = "flex";
    colorWrapper.style.alignItems = "center";
    colorWrapper.style.gap = "5px";
    colorWrapper.style.marginTop = "5px";

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = defaultColor;
    colorInput.classList.add("snakeColorInput");

    const removeButton = document.createElement("button");
    removeButton.innerText = "❌";
    removeButton.style.border = "none";
    removeButton.style.background = "transparent";
    removeButton.style.cursor = "pointer";
    
    removeButton.addEventListener("click", () => {
        colorWrapper.remove();
    });

    colorWrapper.appendChild(colorInput);
    colorWrapper.appendChild(removeButton);
    colorList.appendChild(colorWrapper);
}

addColorPicker();

addColorButton.addEventListener("click", () => addColorPicker());
