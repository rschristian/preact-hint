import { h } from 'preact';
import { useLayoutEffect, useRef, useReducer } from 'preact/hooks';

import './style.css';

/**
 * @typedef {import('./types.d.ts').Props} Props
 * @typedef {import('./types.d.ts').State} State
 * @typedef {import('./types.d.ts').HintProps} HintProps
 */

/**
 * @template T
 * @typedef {import('preact').Ref<T>} Ref<T>
 */

/**
 * @param {State} state
 * @param {MouseEvent | FocusEvent} e
 */
function hintReducer(state, e) {
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

/**
 * @param {Props} props
 */
export default function Container(props) {
    const [state, dispatch] = useReducer(hintReducer, {
        attribute: props.attribute || 'data-hint',
        content: '',
        targetBoundingRect: null,
    });
    /** @type {Ref<HTMLDivElement | null>} */
    const containerElement = useRef(null);

    /** @param {HTMLDivElement} node */
    const onRefChange = (node) => {
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

/**
 * @param {HintProps} props
 */
function Hint(props) {
    /** @type {Ref<HTMLDivElement | null>} */
    const hint = useRef(null);
    /** @type {Ref<HTMLSpanElement | null>} */
    const hintContent = useRef(null);

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
