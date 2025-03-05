const stepDurationInput = document.getElementById('stepDurationInput') as HTMLInputElement;

export let stepDuration = 300

stepDurationInput.addEventListener('change', () => {
    const newValue = parseInt(stepDurationInput.value, 10);
    if (!isNaN(newValue)) {
        stepDuration = newValue;
    }
});

stepDurationInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

stepDurationInput.addEventListener("input", () => {
    const value = parseInt(stepDurationInput.value, 10);
    if (value > 2000) {
        stepDurationInput.style.backgroundColor = "red";
    } else {
        stepDurationInput.style.backgroundColor = "";
    }
});

export function displaySetting() {
    stepDurationInput.textContent = stepDuration.toString()
}