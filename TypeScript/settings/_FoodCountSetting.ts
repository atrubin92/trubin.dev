const foodCountInput = document.getElementById('foodCountInput') as HTMLInputElement;

export let foodCount = 3
displayFoodCountSetting()

function isValidFoodCount(value: number): boolean {
    return !isNaN(value) && 1 <= value && value <= 100
}

export function displayFoodCountSetting() {
    foodCountInput.textContent = foodCount.toString()
}
