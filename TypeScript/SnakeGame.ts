import * as FieldCanvas from "./FieldCanvas";
import { SnakeCell } from "./entiries/SnakeCell";
import * as Settings from "./Settings";
import * as StepProgress from "./StepProgress";
import * as SnakeModel from "./SnakeModel";
import * as FoodModel from "./FoodModel";
import { GameState } from "./settings/GameState";
import { FieldCell } from "./entiries/FieldCell";

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
                FieldCanvas.draw(SnakeModel.getSnakeCopy(), FoodModel.getFoodCopy(), stepPercentage);
            }
            break;
    }

    requestAnimationFrame(mainCanvasLoop);
}

function updateHeadPosition(): boolean {
    const newHead = SnakeModel.calcNewHead();

    if (newHead.x === FoodModel.getFoodCopy().x && newHead.y === FoodModel.getFoodCopy().y) {
        while (
            SnakeModel.contain(FoodModel.getFoodCopy()) ||
            newHead.x === FoodModel.getFoodCopy().x && newHead.y === FoodModel.getFoodCopy().y
        ) {
            FoodModel.createInitialData()
        }
    } else {
        SnakeModel.pop();
    }

    if (isGameOver(newHead)) {
        Settings.gemeOver()
        SnakeModel.reset();
        return false;
    }

    SnakeModel.unshift(newHead);

    Settings.displayScore(SnakeModel.getLength());

    return true;
}

function isGameOver(newHead: SnakeCell): boolean {
    return SnakeModel.contain(newHead)
}
