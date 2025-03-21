import * as FieldCanvas from "./FieldCanvas";
import { SnakeCell } from "./entiries/SnakeCell";
import * as Settings from "./Settings";
import * as StepProgress from "./StepProgress";
import * as SnakeModel from "./SnakeModel";
import * as FoodModel from "./FoodModel";
import { GameState } from "./settings/GameState";

requestAnimationFrame(mainCanvasLoop);

function createInitialData() {
    SnakeModel.createInitialData()
    FoodModel.createInitialData()

    Settings.displaySettings();
}

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

function updateHeadPosition(): boolean {
    const newSnakeHead = SnakeModel.calcNewHead();

    if (FoodModel.contain(newSnakeHead)) {
        while (SnakeModel.contain(FoodModel.getFoodCellArrayCopy()) || FoodModel.contain(newSnakeHead)) {
            FoodModel.createInitialData()
        }
    } else {
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
