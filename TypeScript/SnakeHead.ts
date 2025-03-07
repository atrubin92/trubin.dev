export enum Step {
	Up,
	Down,
	Left,
	Right
}

const enumValues = Object.values(Step).filter(v => typeof v === 'number');
let currentStep = enumValues[Math.floor(Math.random() * enumValues.length)] as Step;
let nextStep = currentStep

export function getOffsets(): Direction {
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

document.addEventListener("keydown", changeDirection);

function changeDirection(event: KeyboardEvent): void {
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