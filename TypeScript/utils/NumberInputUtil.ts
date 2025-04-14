export function blockInvalidKeys(event: KeyboardEvent): void {
    const keysToBlock = ['ArrowUp', 'ArrowDown', '.', '-'];
    if (keysToBlock.includes(event.key)) {
        event.preventDefault();
    }
}