import { Node } from '../base/def/Node';
import { createNodeFromValue } from './createNodeFromValue';

export function parseJson(text: string): Node | null {
    if (isBlank(text)) return null;
    const value = JSON.parse(text);
    return createNodeFromValue(value);
}

function isBlank(text: string) {
    return text === null || text === undefined || /^\s*$/.test(text);
}
