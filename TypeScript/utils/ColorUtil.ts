export function interpolateColor(startHex: string, endHex: string, factor: number): string {
    const [r1, g1, b1] = hexToRgb(startHex);
    const [r2, g2, b2] = hexToRgb(endHex);

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return rgbToHex(r, g, b);
}

function hexToRgb(hex: string): [number, number, number] {
    hex = hex.replace("#", "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function rgbToHex(r: number, g: number, b: number): string {
    return `#${[r,g,b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}
