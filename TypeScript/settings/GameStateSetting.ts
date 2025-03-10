export enum GameState {
	Start,
	Pause
}

const startPauseButton = document.getElementById("startPauseButton") as HTMLButtonElement

startPauseButton.addEventListener("click", () => {
    if (startPauseButton.innerText === "Start") {
        startPauseButton.innerText = "Pause"
    } else {
        startPauseButton.innerText = "Start"
    }
})