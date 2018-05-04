export function randomInt(min: number, max: number) {
    min = Math.floor(min);
    max = Math.floor(max);
    const delta = max - min;
    return Math.floor(Math.random() * delta) + min;
}
