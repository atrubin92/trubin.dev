import { getGameState } from "./Settings";
import { GameState } from "./settings/GameState";

export enum Step {
	Up,
	Down,
	Left,
	Right
}

let currentStep: Step = Step.Up
let nextStep: Step = Step.Up
reset()

export function getDirection(): Direction {
	switch (currentStep) {
		case Step.Up:
			return { x: 0, y: -1 };
		case Step.Down:
			return { x: 0, y: 1 };
		case Step.Left:
			return { x: -1, y: 0 };
		case Step.Right:
			return { x: 1, y: 0 };
	}
}

export function updateCurrentStep() {
	currentStep = nextStep;
}

export function reset() {
	const enumValues = Object.values(Step).filter(v => typeof v === 'number');
	currentStep = enumValues[Math.floor(Math.random() * enumValues.length)] as Step;
	nextStep = currentStep
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event: KeyboardEvent): void {
	if (getGameState() != GameState.IN_PROGRESS) return

	switch (event.key) {
		case "ArrowUp":
			if (currentStep !== Step.Down) {
				nextStep = Step.Up;
			}
			break;

		case "ArrowDown":
			if (currentStep !== Step.Up) {
				nextStep = Step.Down;
			}
			break;

		case "ArrowLeft":
			if (currentStep !== Step.Right) {
				nextStep = Step.Left;
			}
			break;

		case "ArrowRight":
			if (currentStep !== Step.Left) {
				nextStep = Step.Right;
			}
			break;
	}
}