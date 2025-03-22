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

const cellWidthInput = document.getElementById("cellWidthInput") as HTMLInputElement;
const cellHeightInput = document.getElementById("cellHeightInput") as HTMLInputElement;

let cellWidth = 10;
let cellHeight = 10;

function setupCellInput(
    inputElement: HTMLInputElement,
    onValidValueChange: (newValue: number) => void
) {
    inputElement.addEventListener("change", () => {
        const value = parseInt(inputElement.value, 10);
        if (isValidCellSize(value)) {
            onValidValueChange(value);
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