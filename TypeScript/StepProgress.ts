import * as Settings from "./Settings";

let previousStepEndTime = 0;
let currentStepDuration = Settings.getStepDuration();

export function calculateProgress(timestamp: number): number {
    completeStep(timestamp)
    return (timestamp - previousStepEndTime) / currentStepDuration
}

export function completeStep(timestamp: number): boolean {
    const timeSincePreviousStep = timestamp - previousStepEndTime

    if (timeSincePreviousStep >= currentStepDuration) {
        previousStepEndTime = timestamp - Math.min(timeSincePreviousStep - currentStepDuration, Settings.getStepDuration() / 10)
        currentStepDuration = Settings.getStepDuration()

        return true
    }

    return false
}