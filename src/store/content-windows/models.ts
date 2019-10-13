import { ContentWindowDescription, ContentWindowState } from './types';

export class ContentWindowModel implements ContentWindowDescription {
    sym: Symbol;
    state: ContentWindowState = {
        zoomed: false,
        opened: true,
        minimized: false
    }
    constructor(public title: string) {
        this.sym = Symbol(title);
    }
}