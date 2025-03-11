import { h } from 'preact';
import type { ComponentChildren, VNode } from 'preact';
import { useLayoutEffect, useRef, useReducer } from 'preact/hooks';

import './style.css';

interface Props {
    children: ComponentChildren;
    attribute?: string;
    template?: (content: string) => VNode;
}

interface State {
    attribute: string;
    content: string;
    targetBoundingRect: DOMRect | null;
}

function hintReducer(state: State, e: MouseEvent | FocusEvent) {
    if (!(e.target instanceof Element)) return state;

    const content = e.target.getAttribute(state.attribute);
    if (!content) return state;

    if (e.type === 'mouseover' || e.type === 'focusin') {
        return {
            attribute: state.attribute,
            content,
            targetBoundingRect: e.target.getBoundingClientRect(),
        };
    }

    if (e.type === 'mouseout' || e.type === 'focusout') {
        return {
            attribute: state.attribute,
            content: '',
            targetBoundingRect: null,
        };
    }

    return state;
}

const EVENTS = ['mouseover', 'mouseout', 'focusin', 'focusout'];

export default function Container(props: Props): VNode {
    const [state, dispatch] = useReducer(hintReducer, {
        attribute: props.attribute || 'data-hint',
        content: '',
        targetBoundingRect: null,
    });
    const containerElement = useRef<HTMLDivElement | null>(null);

    const onRefChange = (node: HTMLDivElement) => {
        containerElement.current = node;

        for (const event of EVENTS) {
            node.addEventListener(event, dispatch);
        }

        return () => {
            for (const event of EVENTS) {
                node.removeEventListener(event, dispatch);
            }
        };
    };

    const show = containerElement.current !== null && state.content && state.targetBoundingRect;

    return (
        <div ref={onRefChange} class="preact-hint__container">
            {show && (
                <Hint
                    template={props.template}
                    content={state.content}
                    rootBoundingRect={containerElement.current.getBoundingClientRect()}
                    targetBoundingRect={state.targetBoundingRect}
                />
            )}
            {props.children}
        </div>
    );
}

interface HintProps {
    content: string;
    template?: (content: string) => VNode;
    rootBoundingRect: DOMRect;
    targetBoundingRect: DOMRect;
}

function Hint(props: HintProps): VNode {
    const hint = useRef<HTMLDivElement>(null);
    const hintContent = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        const hintWidth = hintContent.current.getBoundingClientRect().width;

        hint.current.style.bottom = `${
            props.rootBoundingRect.height -
            props.targetBoundingRect.top +
            props.rootBoundingRect.top +
            2
        }px`;
        hint.current.style.left = `${
            props.targetBoundingRect.left -
            props.rootBoundingRect.left -
            hintWidth / 2 +
            props.targetBoundingRect.width / 2
        }px`;
    }, []);

    return (
        <div class="preact-hint preact-hint__fade-in" ref={hint}>
            <span class="preact-hint__content" ref={hintContent}>
                {props.template ? props.template(props.content) : props.content}
            </span>
        </div>
    );
}
