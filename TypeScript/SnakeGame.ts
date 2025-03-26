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
                createInitialData();
            }
            if (!StepProgress.completeStep(timestamp) || updateHeadPosition()) {
                const stepPercentage = StepProgress.calculateProgress();
                FieldCanvas.draw(SnakeModel.getSnakeCellArrayCopy(), FoodModel.getFoodCellArrayCopy(), stepPercentage);
            }
            break;
    }

    requestAnimationFrame(mainCanvasLoop);
}

function createInitialData() {
    SnakeModel.createInitialData()
    FoodModel.createInitialData()
}

function updateHeadPosition(): boolean {
    const newSnakeHead = SnakeModel.calcNewHead();

    if (!FoodModel.replace(newSnakeHead)) {
        SnakeModel.pop();
    }

    if (isGameOver(newSnakeHead)) {
        Settings.gemeOver()
        SnakeModel.reset();
        return false;
    }

    SnakeModel.unshift(newSnakeHead);

    Settings.displayScore(SnakeModel.getLength());

    return true;
}

function isGameOver(newHead: SnakeCell): boolean {
    return SnakeModel.contain(newHead)
}
