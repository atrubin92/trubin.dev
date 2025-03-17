import * as Settings from "../Settings"

export interface FieldCell {
    x: number
    y: number
}

export namespace FieldCell {
    export function create(): FieldCell {
        const x = Math.floor(Math.random() * Settings.getFieldWidth());
        const y = Math.floor(Math.random() * Settings.getFieldHeight());

        return { x, y };
    }
}