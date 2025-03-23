export function getFoodCount() {
    return foodCount
}

export function setInputDisabled(disabled: boolean) {
    foodCountInput.disabled = disabled
}

let foodCount = 3

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
    return !isNaN(value) && 1 <= value && value <= 100
}
