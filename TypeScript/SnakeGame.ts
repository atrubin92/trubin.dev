import * as FieldCanvas from "./FieldCanvas";
import { SnakeCell } from "./SnakeCell";
import * as Settings from "./Settings";
import * as StepProgress from "./StepProgress";
import * as SnakeModel from "./SnakeModel";

let food: SnakeCell;

createInitialData();
requestAnimationFrame(mainCanvasLoop);

function createInitialData() {
    SnakeModel.createInitialData()

    food = createCell();

    Settings.displaySettings();
}

function mainCanvasLoop(timestamp: number): void {
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
            food = createCell();
        }
    } else {
        SnakeModel.pop();
    }

    if (isGameOver(newHead)) {
        createInitialData();
        return;
    }

    SnakeModel.unshift(newHead);

    Settings.displaySnakeLength(SnakeModel.getLength());
}

function createCell(): SnakeCell {
    return SnakeCell.create(Settings.getFieldWidth(), Settings.getFieldHeight());
}

function isGameOver(newHead: SnakeCell): boolean {
    return SnakeModel.contain(newHead)
}
