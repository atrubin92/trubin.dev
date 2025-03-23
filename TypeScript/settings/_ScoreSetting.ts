export function displayScore(scoreValue: number) {
    if (0 <= scoreValue) {
        scoreLabel.textContent = "Score: " + scoreValue
    }
}

const scoreLabel = document.getElementById("scoreLabel") as HTMLDivElement
