import * as FieldCanvas from "./renderer/FieldRenderer";
import { SnakeCell } from "./entiries/cell/SnakeCell";
import * as Settings from "./settings/Settings";
import * as StepProgress from "./StepProgress";
import * as SnakeModel from "./SnakeModel";
import * as FoodModel from "./FoodModel";
import { GameState } from "./entiries/GameState";
import { initCellTypeCanvas } from "./SnakeCellTypePreview";

initCellTypeCanvas()

requestAnimationFrame(mainCanvasLoop);

function mainCanvasLoop(timestamp: number): void {
    switch (Settings.getGameState()) {
        case GameState.NOT_STARTED:
            FieldCanvas.draw([], null, 0)
            StepProgress.pause()
            break;

        case GameState.PAUSED:
            StepProgress.pause()
            break;

        case GameState.IN_PROGRESS:
            if (SnakeModel.getLength() === 0) {
                SnakeModel.createInitialData()
                FoodModel.createInitialData()
            }
            if (!StepProgress.completeStep(timestamp) || updateHeadPosition()) {
                const stepPercentage = StepProgress.calculateProgress();
                FieldCanvas.draw(SnakeModel.getSnakeCellArrayCopy(), FoodModel.getFoodCellArrayCopy(), stepPercentage);
            }
            break;
    }

    requestAnimationFrame(mainCanvasLoop);
}

function updateHeadPosition(): boolean {
    const newSnakeHead = SnakeModel.calcNewHead();

    if (SnakeModel.contains(newSnakeHead)) {
        Settings.gemeOver()
        SnakeModel.reset();
        return false;
    }

    if (!FoodModel.tryEatFood(newSnakeHead)) {
        SnakeModel.removeTail();
    }
    SnakeModel.addHead(newSnakeHead);

    Settings.displayScore(SnakeModel.getLength());

    return true;
}
