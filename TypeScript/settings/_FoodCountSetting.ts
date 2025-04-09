import * as FieldSize from "./_FieldSizeSetting";

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
    }
}

const INITIAL_FREE_CELLS = 1

let foodCount = 3
let foodCountMax = 10

const foodCountInput = document.getElementById('foodCountInput') as HTMLInputElement;
foodCountInput.value = foodCount.toString()

foodCountInput.addEventListener('change', () => {
    const value = parseInt(foodCountInput.value, 10);
    if (isValidFoodCount(value)) {
        foodCount = value;
    }
});

foodCountInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

foodCountInput.addEventListener("input", () => updateFoodCountBackground());

function updateFoodCountBackground() {
    const value = parseInt(foodCountInput.value, 10);
    if (isValidFoodCount(value)) {
        foodCountInput.style.backgroundColor = "";
    } else {
        foodCountInput.style.backgroundColor = "red";
    }
}

function isValidFoodCount(value: number): boolean {
    if (isNaN(value)) return false
    if (value == 0 && FieldSize.getFieldWidth() * FieldSize.getFieldHeight() == 1) return true
    if (1 <= value && value < FieldSize.getFieldWidth() * FieldSize.getFieldHeight()) return true
    return false
}
