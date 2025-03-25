import { SnakeCellType } from "../entiries/SnakeCellType";

export function getSnakeCellType(): SnakeCellType {
    return currentSnakeCellType;
}

let currentSnakeCellType: SnakeCellType = SnakeCellType.SQUARE;

const radios = document.querySelectorAll<HTMLInputElement>('input[name="cellType"]');

radios.forEach(radio => {
    radio.addEventListener("keydown", event => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
            event.preventDefault();
        }
    });

    radio.addEventListener("change", () => {
        const value = radio.value;

        if (Object.values(SnakeCellType).includes(value as SnakeCellType)) {
            currentSnakeCellType = value as SnakeCellType;
        }
    });
});