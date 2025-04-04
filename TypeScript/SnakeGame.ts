import * as FieldCanvas from "./renderer/FieldRenderer";
import * as Settings from "./settings/Settings";
import * as StepProgress from "./StepProgress";
import * as SnakeModel from "./SnakeModel";
import * as FoodModel from "./FoodModel";
import { GameState } from "./entiries/GameState";
import { drawCellTypeCanvas } from "./SnakeCellTypePreview";

window.addEventListener("keydown", (event) => {
    if (["ArrowUp", "ArrowDown"].includes(event.key)) {
        event.preventDefault();
    }
});

requestAnimationFrame(mainCanvasLoop);

function mainCanvasLoop(timestamp: number): void {
    switch (Settings.getGameState()) {
        case GameState.NOT_STARTED:
            StepProgress.pause()
            break;

        case GameState.PAUSED:
            StepProgress.pause()
            break;

        case GameState.IN_PROGRESS:
            createInitialData()
            if (StepProgress.completeStep(timestamp) && !moveSnake()) {
                Settings.gemeOver()
                SnakeModel.reset()
                FoodModel.reset()
            }
            break;
    }

    drawCellTypeCanvas()
    FieldCanvas.draw(
        SnakeModel.getSnakeCellArrayCopy(),
        FoodModel.getFoodCellArrayCopy(),
        StepProgress.calculateProgress()
    );

    requestAnimationFrame(mainCanvasLoop);
}

function createInitialData() {
    if (SnakeModel.getLength() === 0) {
        SnakeModel.createInitialData()
        FoodModel.createInitialData()
        Settings.displayScore(SnakeModel.getLength());
    }
}

function moveSnake(): boolean {
    const newSnakeHead = SnakeModel.calcNewHead();

    if (SnakeModel.containsWithoutTail(newSnakeHead)) {
        return false;
    }

    SnakeModel.addHead(newSnakeHead);
    if (FoodModel.tryEatFood(newSnakeHead)) {
        Settings.displayScore(SnakeModel.getLength());
    } else {
        SnakeModel.removeTail();
    }

    return true;
}
