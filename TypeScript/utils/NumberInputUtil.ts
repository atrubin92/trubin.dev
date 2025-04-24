export function blockInvalidKeys(event: KeyboardEvent): void {
    const keysToBlock = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', '.', '-'];
    if (keysToBlock.includes(event.key)) {
        event.preventDefault();
    }
}

export function preventScroll(): void {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
        const keysToPrevent = ['ArrowUp', 'ArrowDown'];
        if (keysToPrevent.includes(event.key)) {
            event.preventDefault();
        }
    });
}