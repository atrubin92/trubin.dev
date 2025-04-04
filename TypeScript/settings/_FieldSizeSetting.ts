import * as BoxSize from "./_BoxSizeSetting"
import * as FoodCount from "./_FoodCountSetting"

export function getFieldWidth(): number {
    return cellWidth
}

export function getFieldHeight(): number {
    return cellHeight
}

export function setInputsDisabled(disabled: boolean) {
    cellWidthInput.disabled = disabled;
    cellHeightInput.disabled = disabled;
}

let cellWidth = 10;
let cellHeight = 10;

const cellWidthInput = document.getElementById("cellWidthInput") as HTMLInputElement;
cellWidthInput.value = cellWidth.toString();

const cellHeightInput = document.getElementById("cellHeightInput") as HTMLInputElement;
cellHeightInput.value = cellHeight.toString();

updateExternalSettings()

function setupCellInput(
    inputElement: HTMLInputElement,
    onValidValueChange: (newValue: number) => void
) {
    inputElement.addEventListener("change", () => {
        const value = parseInt(inputElement.value, 10);
        if (isValidCellSize(value)) {
            onValidValueChange(value);
            updateExternalSettings()
        }
    });

    inputElement.addEventListener("input", () => {
        const value = parseInt(inputElement.value, 10);
        inputElement.style.backgroundColor = isValidCellSize(value) ? "" : "red";
    });

    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
        }
    });
}

function isValidCellSize(value: number): boolean {
    return !isNaN(value) && 1 <= value && value <= 40;
}

setupCellInput(cellWidthInput, (newValue) => (cellWidth = newValue));
setupCellInput(cellHeightInput, (newValue) => (cellHeight = newValue));

function updateExternalSettings() {
    BoxSize.updateBoxSize()
    FoodCount.updateFoodLimit()
}
