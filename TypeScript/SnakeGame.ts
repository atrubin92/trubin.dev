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
    if (Settings.getGameState() != GameState.IN_PROGRESS) {
        FieldCanvas.draw([], null, 0);
        requestAnimationFrame(mainCanvasLoop);
        return
    }
    if (SnakeModel.getLength() == 0) {
        createInitialData();
    }

    if (StepProgress.completeStep(timestamp)) {
        updateHeadPosition();
    }

    const stepPercentage = StepProgress.calculateProgress(timestamp)
    FieldCanvas.draw(SnakeModel.getSnakeCopy(), food, stepPercentage);

    requestAnimationFrame(mainCanvasLoop);
}

function updateHeadPosition(): void {
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
        createInitialData();
        return;
    }

    SnakeModel.unshift(newHead);

    Settings.displaySnakeLength(SnakeModel.getLength());
}

function isGameOver(newHead: SnakeCell): boolean {
    return SnakeModel.contain(newHead)
}
