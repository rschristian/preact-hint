import { ComponentChildren, JSX } from 'preact';

export interface Props {
    children: ComponentChildren;
    attribute?: string;
    template?: (content: string) => JSX.Element;
}

export interface State {
    attribute: string;
    content: string;
    targetBoundingRect: DOMRect | null;
}

export interface HintProps {
    content: string;
    template?: (content: string) => JSX.Element;
    rootBoundingRect: DOMRect;
    targetBoundingRect: DOMRect;
}

export default function Container(props: Props): JSX.Element;
export {};
