import * as BoxSize from "./_BoxSizeSetting"
import * as FoodCount from "./_FoodCountSetting"
import { updateGameStartAvailability } from "./_GameStateSetting"
import { blockInvalidKeys } from "../utils/NumberInputUtil"

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

export function isValid() {
    return isCellWidthValid && isCellHeightValid
}

let isCellWidthValid = true;
let isCellHeightValid = true;

let cellWidth = 10;
let cellHeight = 10;

const cellWidthInput = document.getElementById("cellWidthInput") as HTMLInputElement;
cellWidthInput.value = cellWidth.toString();

const cellHeightInput = document.getElementById("cellHeightInput") as HTMLInputElement;
cellHeightInput.value = cellHeight.toString();

updateExternalSettings()

function setupCellInput(
    inputElement: HTMLInputElement,
    onValidValueChange: (newValue: number) => void,
    validitySetter: (valid: boolean) => void
) {
    const updateValue = () => {
        const value = parseInt(inputElement.value, 10);
        const valid = isValidCellSize(value);
        validitySetter(valid);
        if (valid) {
            onValidValueChange(value);
            updateExternalSettings();
        }
        inputElement.style.backgroundColor = valid ? "" : "red";
        updateGameStartAvailability()
    }

    inputElement.addEventListener("change", updateValue);
    inputElement.addEventListener("input", updateValue);

    inputElement.addEventListener('keydown', blockInvalidKeys);
}

setupCellInput(cellWidthInput, (newValue) => (cellWidth = newValue), (valid) => { isCellWidthValid = valid });
setupCellInput(cellHeightInput, (newValue) => (cellHeight = newValue), (valid) => { isCellHeightValid = valid });

function isValidCellSize(value: number): boolean {
    return !isNaN(value) && 1 <= value && value <= 40;
}

function updateExternalSettings() {
    BoxSize.updateBoxSize()
    FoodCount.updateFoodLimit()
}
