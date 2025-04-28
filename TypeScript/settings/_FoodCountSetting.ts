import * as FieldSize from "./_FieldSizeSetting";
import { updateGameStartAvailability } from "./_GameStateSetting"
import { blockInvalidKeys } from "../utils/NumberInputUtil"

export function getFoodCount() {
    return foodCount
}

export function setInputDisabled(disabled: boolean) {
    foodCountInput.disabled = disabled
}

export function updateFoodLimit() {
    foodCountMax = FieldSize.getFieldWidth() * FieldSize.getFieldHeight() - INITIAL_FREE_CELLS
    foodCountInput.max = foodCountMax.toString()

    if (foodCountMax == 0) {
        foodCountInput.min = "0"
    } else {
        foodCountInput.min = "1"
        if (foodCount == 0) {
            foodCountInput.value = "1"
            foodCount = 1
        }
    }

    const currentFoodCount = parseInt(foodCountInput.value, 10);
    if (isNaN(currentFoodCount) || currentFoodCount > foodCountMax) {
        foodCountInput.value = foodCountMax.toString()
        foodCount = foodCountMax;
        updateFoodCountBackground()
    } else if (currentFoodCount == 0 && foodCountInput.min == "1") {
        foodCountInput.value = "1"
        foodCount = 1;
        updateFoodCountBackground()
    } else if (isValidFoodCount(currentFoodCount) &&
        foodCountInput.style.backgroundColor == INVALID_INPUT_COLOR
    ) {
        updateFoodCountBackground()
    }
}

export function isValid() {
    return isFoodCountValid
}

const INVALID_INPUT_COLOR = "red";
const VALID_INPUT_COLOR = "";

const INITIAL_FREE_CELLS = 1

let foodCount = 3
let foodCountMax = 10

let isFoodCountValid = true;

const foodCountInput = document.getElementById('foodCountInput') as HTMLInputElement;
foodCountInput.value = foodCount.toString()

foodCountInput.addEventListener('change', () => {
    const value = parseInt(foodCountInput.value, 10);
    if (isValidFoodCount(value)) {
        foodCount = value;
    }
});

foodCountInput.addEventListener('keydown', blockInvalidKeys);

foodCountInput.addEventListener("input", () => updateFoodCountBackground());

function updateFoodCountBackground() {
    const value = parseInt(foodCountInput.value, 10);
    isFoodCountValid = isValidFoodCount(value);
    foodCountInput.style.backgroundColor = isFoodCountValid ? VALID_INPUT_COLOR : INVALID_INPUT_COLOR;
    updateGameStartAvailability();
}

function isValidFoodCount(value: number): boolean {
    if (isNaN(value)) return false
    if (value == 0 && FieldSize.getFieldWidth() * FieldSize.getFieldHeight() == 1) return true
    if (1 <= value && value < FieldSize.getFieldWidth() * FieldSize.getFieldHeight()) return true
    return false
}
