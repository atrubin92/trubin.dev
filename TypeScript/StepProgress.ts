import * as Settings from "./Settings";

let previousStepEndTime = 0;
let currentStepDuration = Settings.stepDuration;

export function calculateProgress(timestamp: number): number {
    completeStep(timestamp)
    return (timestamp - previousStepEndTime) / currentStepDuration
}

export function completeStep(timestamp: number): boolean {
    const timeSincePreviousStep = timestamp - previousStepEndTime

    if (timeSincePreviousStep >= currentStepDuration) {
        previousStepEndTime = timestamp - Math.min(timeSincePreviousStep - currentStepDuration, Settings.stepDuration / 10)
        currentStepDuration = Settings.stepDuration

        return true
    }

    return false
}