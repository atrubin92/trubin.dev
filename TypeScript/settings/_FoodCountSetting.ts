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

    const currentFoodCount = parseInt(foodCountInput.value, 10);
    if (isNaN(currentFoodCount) || currentFoodCount > foodCountMax) {
        foodCountInput.value = foodCountMax.toString()
        foodCount = foodCountMax;
        foodCountInput.style.backgroundColor = "";
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

foodCountInput.addEventListener("input", () => {
    const value = parseInt(foodCountInput.value, 10);
    if (isValidFoodCount(value)) {
        foodCountInput.style.backgroundColor = "";
    } else {
        foodCountInput.style.backgroundColor = "red";
    }
});

function isValidFoodCount(value: number): boolean {
    return !isNaN(value) &&
        1 <= value &&
        value < FieldSize.getFieldWidth() * FieldSize.getFieldHeight()
}
