const stepDurationInput = document.getElementById('stepDurationInput') as HTMLInputElement;

export let stepDuration = 300

stepDurationInput.addEventListener('change', () => {
    const value = parseInt(stepDurationInput.value, 10);
    if (isValidStepDuration(value)) {
        stepDuration = value;
    }
});

stepDurationInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

stepDurationInput.addEventListener("input", () => {
    const value = parseInt(stepDurationInput.value, 10);
    if (isValidStepDuration(value)) {
        stepDurationInput.style.backgroundColor = "";
    } else {
        stepDurationInput.style.backgroundColor = "red";
    }
});

function isValidStepDuration(value: number): boolean {
    return !isNaN(value) && 50 <= value && value <= 2_000
}

export function displaySetting() {
    stepDurationInput.textContent = stepDuration.toString()
}