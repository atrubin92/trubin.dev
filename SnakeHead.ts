export enum Step {
  Up,
  Down,
  Left,
  Right
}

export function getOffsets(step: Step): [number, number] {
  switch (step) {
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

export function changeStep(eventKey: string, currentStep:Step) {
  switch (eventKey) {
    case "ArrowUp":
      if (currentStep !== Step.Down) {
        return Step.Up;
      }

    case "ArrowDown":
      if (currentStep !== Step.Up) {
        return Step.Down;
      }
      break;

    case "ArrowLeft":
      if (currentStep !== Step.Right) {
        return Step.Left;
      }

    case "ArrowRight" :
      if (currentStep !== Step.Left) {
        return Step.Right;
      }
  }

  return currentStep
}