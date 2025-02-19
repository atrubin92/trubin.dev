export enum Step {
  Up,
  Down,
  Left,
  Right
}

const enumValues = Object.values(Step).filter(v => typeof v === 'number'); // Filter for numeric enum values
let currentStep = enumValues[Math.floor(Math.random() * enumValues.length)] as Step;

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
      if (currentStep !== Step.Down) {
        currentStep = Step.Up;
      }
      break;

    case "ArrowDown":
      if (currentStep !== Step.Up) {
        currentStep = Step.Down;
      }
      break;

    case "ArrowLeft":
      if (currentStep !== Step.Right) {
        currentStep = Step.Left;
      }
      break;

    case "ArrowRight" :
      if (currentStep !== Step.Left) {
        currentStep = Step.Right;
      }
      break;
  }
}