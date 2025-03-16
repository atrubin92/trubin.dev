import { GameState } from "./GameState"
import * as FieldSize from "./FieldSizeSetting";

const gameStateButton = document.getElementById("gameStateButton") as HTMLButtonElement

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

gameStateButton.addEventListener("click", () => {
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
    gameStateButton.innerText = buttonTextMap[gameState]
    FieldSize.setInputsDisabled(gameState !== GameState.NOT_STARTED);
}

export function gameOver() {
    gameState = GameState.NOT_STARTED
    updateGameStateButton()
}
