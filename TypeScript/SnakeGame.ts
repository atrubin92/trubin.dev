import * as FieldCanvas from "./FieldCanvas";
import { SnakeCell } from "./SnakeCell";
import * as Settings from "./Settings";
import * as StepProgress from "./StepProgress";
import * as SnakeModel from "./SnakeModel";
import { GameState } from "./settings/GameState";

let food: SnakeCell;

requestAnimationFrame(mainCanvasLoop);

function createInitialData() {
    SnakeModel.createInitialData()

    food = SnakeCell.create();

    Settings.displaySettings();
}

function mainCanvasLoop(timestamp: number): void {
    switch (Settings.getGameState()) {
        case GameState.NOT_STARTED:
            FieldCanvas.draw([], null, 0);
            break;

        case GameState.IN_PROGRESS:
            if (SnakeModel.getLength() === 0) {
                createInitialData();
            }
            let isDrawField = true;
            if (StepProgress.completeStep(timestamp)) {
                isDrawField = updateHeadPosition()
            }
            if (isDrawField) {
                const stepPercentage = StepProgress.calculateProgress(timestamp);
                FieldCanvas.draw(SnakeModel.getSnakeCopy(), food, stepPercentage);
            }
            break;
    }

    requestAnimationFrame(mainCanvasLoop);
}

function updateHeadPosition(): boolean {
    const newHead = SnakeModel.calcNewHead();

    if (newHead.x === food.x && newHead.y === food.y) {
        while (
            SnakeModel.contain(food) ||
            newHead.x === food.x && newHead.y === food.y
        ) {
            food = SnakeCell.create();
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
