export function blockInvalidKeys(event: KeyboardEvent): void {
    const keysToBlock = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', '.', '-'];
    if (keysToBlock.includes(event.key)) {
        event.preventDefault();
    }
}