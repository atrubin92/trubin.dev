export enum GameState {
    NOT_STARTED,
    IN_PROGRESS,
    PAUSED
}

const startPauseButton = document.getElementById("startPauseButton") as HTMLButtonElement

let gameState = GameState.NOT_STARTED

const buttonTextMap = {
    [GameState.NOT_STARTED]: "Start",
    [GameState.IN_PROGRESS]: "Pause",
    [GameState.PAUSED]: "Resume"
};

export function getGameState(): GameState {
    return gameState
}

export function resetGameState() {
    gameState = GameState.NOT_STARTED
    updateGameStateButton()
}

startPauseButton.addEventListener("click", () => {
    switch (gameState) {
        case GameState.NOT_STARTED:
            gameState = GameState.IN_PROGRESS
            break;
        case GameState.IN_PROGRESS:
            gameState = GameState.PAUSED
            break;
        case GameState.PAUSED:
            gameState = GameState.IN_PROGRESS
            break;
    }
    updateGameStateButton()
})

function updateGameStateButton() {
    startPauseButton.innerText = buttonTextMap[gameState]
}