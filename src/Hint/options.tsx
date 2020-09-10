export interface Options {
    attribute: string;
    baseclass: string;
    events: {
        click: boolean;
        focus: boolean;
        hover: boolean;
    };
    hintDelay: number;
}

export const defaults: Options = {
    attribute: 'data-ph',
    baseclass: 'preact-hint',
    events: {
        click: false,
        focus: false,
        hover: true,
    },
    hintDelay: 125,
};

export function overrideDefaults(options: Partial<Options>): void {
    Object.assign(defaults, options);
}
