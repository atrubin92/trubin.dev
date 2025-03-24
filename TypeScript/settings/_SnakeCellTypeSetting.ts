import { SnakeCellType } from "../entiries/SnakeCellType";

export function getCurrentSnakeCellType(): SnakeCellType {
    return currentSnakeCellType;
}

let currentSnakeCellType: SnakeCellType = SnakeCellType.Square;

const radios = document.querySelectorAll<HTMLInputElement>('input[name="cellType"]');

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        const value = radio.value;

        if (Object.values(SnakeCellType).includes(value as SnakeCellType)) {
            currentSnakeCellType = value as SnakeCellType;
            console.log("Selected Cell Type:", currentSnakeCellType);
        }
    });
});