import { GameState } from "../entiries/GameState"
import * as FieldSize from "./_FieldSizeSetting";

const gameStateButton = document.getElementById("gameStateButton") as HTMLButtonElement

const buttonTextMap = {
    [GameState.NOT_STARTED]: "Start",
    [GameState.IN_PROGRESS]: "Pause",
    [GameState.PAUSED]: "Resume"
}

let gameState = GameState.NOT_STARTED

export function getGameState(): GameState {
    return gameState
}

export function resetGameState() {
    updateGameState(GameState.NOT_STARTED)
}

export function gameOver() {
    updateGameState(GameState.NOT_STARTED)
}

gameStateButton.addEventListener("click", () => {
    switch (gameState) {
        case GameState.NOT_STARTED:
            updateGameState(GameState.IN_PROGRESS)
            break;
        case GameState.IN_PROGRESS:
            updateGameState(GameState.PAUSED)
            break;
        case GameState.PAUSED:
            updateGameState(GameState.IN_PROGRESS)
            break;
    }
})

function updateGameStateButton() {
    gameStateButton.innerText = buttonTextMap[gameState]
    FieldSize.setInputsDisabled(gameState !== GameState.NOT_STARTED);
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden && gameState == GameState.IN_PROGRESS) {
        updateGameState(GameState.PAUSED)
    }
})

window.addEventListener("blur", () => {
    if (gameState == GameState.IN_PROGRESS) {
        updateGameState(GameState.PAUSED)
    }
})

function updateGameState(newGameState: GameState) {
    gameState = newGameState
    updateGameStateButton()
}
