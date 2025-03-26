export class DrawCellParams {
    context!: CanvasRenderingContext2D;
    cellX!: number;
    cellY!: number;
    color!: string;
    sizeScale!: number;

    private _boxWidth!: number;
    private _boxHeight!: number;

    private _halfBoxWidth!: number;
    private _halfBoxHeight!: number;

    set boxWidth(value: number) {
        this._boxWidth = value;
        this._halfBoxWidth = value / 2;
    }

    set boxHeight(value: number) {
        this._boxHeight = value;
        this._halfBoxHeight = value / 2;
    }

    get boxWidth() {
        return this._boxWidth;
    }

    get boxHeight() {
        return this._boxHeight;
    }

    get halfBoxWidth() {
        return this._halfBoxWidth;
    }

    get halfBoxHeight() {
        return this._halfBoxHeight;
    }
}
