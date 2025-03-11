export enum GameState {
    NOT_STARTED,
    IN_PROGRESS,
    PAUSED
}

const startPauseButton = document.getElementById("startPauseButton") as HTMLButtonElement

let gameState = GameState.NOT_STARTED

export function getGameState(): GameState {
    return gameState
}

startPauseButton.addEventListener("click", () => {
    if (startPauseButton.innerText === "Start") {
        startPauseButton.innerText = "Pause"
    } else {
        startPauseButton.innerText = "Start"
    }
})