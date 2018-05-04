import { randomInt } from './randomInt';

export function randomSelect(list: any[]) {
    if (!list || list.length < 1) return undefined;
    return list[randomInt(0, list.length)];
}
