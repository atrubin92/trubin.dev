import * as Settings from "./settings/Settings";

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

export function initializeStepDuration() {
    stepDuration = Settings.getStepDuration()
    pause()
}

export function gemeOver() {
    stepTime = stepDuration * finalStepPercentage
    pause()
}

const finalStepPercentage = 2 / 3

let stepTime = 0

let previousTimestamp = 0
let stepDuration = 0

let isPause = true

initializeStepDuration()
