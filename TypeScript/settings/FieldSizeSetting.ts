const cellWidthInput = document.getElementById("cellWidthInput") as HTMLInputElement
const cellHeightInput = document.getElementById("cellHeightInput") as HTMLInputElement

let cellWidth = 10
let cellHeight = 10

cellWidthInput.addEventListener('change', () => {
    const value = parseInt(cellWidthInput.value, 10)
    if (isValidCellSize(value)) {
        cellWidth = value
    }
})

cellWidthInput.addEventListener("input", () => {
    const value = parseInt(cellWidthInput.value, 10)
    if (isValidCellSize(value)) {
        cellWidthInput.style.backgroundColor = ""
    } else {
        cellWidthInput.style.backgroundColor = "red"
    }
})

cellWidthInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
})

cellHeightInput.addEventListener('change', () => {
    const value = parseInt(cellHeightInput.value, 10)
    if (isValidCellSize(value)) {
        cellHeight = value
    }
})

cellHeightInput.addEventListener("input", () => {
    const value = parseInt(cellHeightInput.value, 10)
    if (isValidCellSize(value)) {
        cellHeightInput.style.backgroundColor = ""
    } else {
        cellHeightInput.style.backgroundColor = "red"
    }
})

cellHeightInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
})

function isValidCellSize(value: number): boolean {
    return !isNaN(value) && 1 <= value && value <= 40
}