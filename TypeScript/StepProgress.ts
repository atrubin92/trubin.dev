import * as Settings from "./settings/Settings";

let stepTime = 0

let previousTimestamp = 0
let stepDuration = Settings.getStepDuration()

let isPause = true

export function calculateProgress(): number {
    return stepTime / stepDuration
}

export function completeStep(timestamp: number): boolean {
    if (isPause) {
        isPause = false
        previousTimestamp = timestamp
    }

    stepTime += timestamp - previousTimestamp
    previousTimestamp = timestamp

    if (stepTime >= stepDuration) {
        stepTime -= stepDuration
        stepDuration = Settings.getStepDuration()

        return true
    }

    return false
}

export function pause() {
    isPause = true
}