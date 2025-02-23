export enum Step {
	Up,
	Down,
	Left,
	Right
}

const enumValues = Object.values(Step).filter(v => typeof v === 'number');
let currentStep = enumValues[Math.floor(Math.random() * enumValues.length)] as Step;
let nextStep = currentStep

export function getOffsets(): [number, number] {
	switch (currentStep) {
		case Step.Up:
			return [0, -1];
		case Step.Down:
			return [0, 1];
		case Step.Left:
			return [-1, 0];
		case Step.Right:
			return [1, 0];
	}
}

export function changeStep(eventKey: string) {
	switch (eventKey) {
		case "ArrowUp":
			if (nextStep !== Step.Down) {
				nextStep = Step.Up;
			}
			break;

		case "ArrowDown":
			if (nextStep !== Step.Up) {
				nextStep = Step.Down;
			}
			break;

		case "ArrowLeft":
			if (nextStep !== Step.Right) {
				nextStep = Step.Left;
			}
			break;

		case "ArrowRight":
			if (nextStep !== Step.Left) {
				nextStep = Step.Right;
			}
			break;
	}
}

export function updateCurrentStep() {
	currentStep = nextStep;
}