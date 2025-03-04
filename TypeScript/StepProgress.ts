import * as Settings from "./Settings";

let lastTime = 0;
let currentStepDuration = Settings.frameDuration;

export function calculateProgress(timestamp: number): number {
    completeStep(timestamp)
    return (timestamp - lastTime) / currentStepDuration
}

export function completeStep(timestamp: number): boolean {
    const timeSinceLastFrame = timestamp - lastTime

    if (timeSinceLastFrame >= currentStepDuration) {
        lastTime = timestamp - Math.min(timeSinceLastFrame - currentStepDuration, Settings.frameDuration / 10)
        currentStepDuration = Settings.frameDuration

        return true
    }

    return false
}