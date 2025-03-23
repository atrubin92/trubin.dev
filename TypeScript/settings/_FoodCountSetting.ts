const foodCountInput = document.getElementById('foodCountInput') as HTMLInputElement;

export let foodCount = 3
displayFoodCountSetting()

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

export function displayFoodCountSetting() {
    foodCountInput.textContent = foodCount.toString()
}
