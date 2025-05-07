const BLOCKED_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', '.', '-'];
const SCROLL_PREVENT_KEYS = ['ArrowUp', 'ArrowDown'];

function handleKeyEvent(event: KeyboardEvent, keysToBlock: string[]): void {
    if (keysToBlock.includes(event.key)) {
        event.preventDefault();
    }
}

export function blockInvalidKeys(event: KeyboardEvent): void {
    handleKeyEvent(event, BLOCKED_KEYS);
}

export function preventScroll(): void {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
        handleKeyEvent(event, SCROLL_PREVENT_KEYS);
    });
}