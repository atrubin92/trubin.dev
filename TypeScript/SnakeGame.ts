import * as FieldCanvas from "./renderer/FieldRenderer";
import * as Settings from "./settings/Settings";
import * as StepProgress from "./StepProgress";
import * as SnakeModel from "./SnakeModel";
import * as FoodModel from "./FoodModel";
import { preventScroll } from "./utils/NumberInputUtil";
import { GameState } from "./entiries/GameState";
import { drawCellTypeCanvas } from "./SnakeCellTypePreview";

preventScroll()

requestAnimationFrame(mainCanvasLoop);

function mainCanvasLoop(timestamp: number): void {
    switch (Settings.getGameState()) {
        case GameState.NOT_STARTED:
            if (SnakeModel.getLength() > 0) clearData()

            StepProgress.pause()
            break;

        case GameState.PAUSED:
            StepProgress.pause()
            break;

        case GameState.IN_PROGRESS:
            if (SnakeModel.getLength() === 0) createInitialData()

            if (StepProgress.completeStep(timestamp) && !moveSnake()) {
                Settings.gemeOver()
            }
            break;

        case GameState.GAME_OVER:
            StepProgress.pause()
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
    SnakeModel.createInitialData()
    FoodModel.createInitialData()
    StepProgress.initializeStepDuration();
    Settings.displayScore(SnakeModel.getLength());
}

function clearData() {
    SnakeModel.reset()
    FoodModel.reset()
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
