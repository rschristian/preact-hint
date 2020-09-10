import { createRef, h, VNode } from 'preact';
import { useState, useEffect, useCallback } from 'preact/hooks';

type Position = 'top' | 'bottom' | 'left' | 'right';

interface Options {
    attribute: string;
    baseClassName: string;
    events: {
        click: boolean;
        focus: boolean;
        hover: boolean;
    };
    hintDelay: number;
    position: Position;
}

export default function PreactHint(props: { options?: Partial<Options> }): VNode {
    const { attribute, baseClassName, events, hintDelay, position }: Options = {
        attribute: 'data-ph',
        baseClassName: 'preact-hint',
        events: { click: false, focus: false, hover: true },
        hintDelay: 125,
        position: 'top',
        ...props.options,
    };

    const hint = createRef();
    const container = createRef();
    const [target, setTarget] = useState<Element | null>(null);
    const [content, setContent] = useState('tits');
    const [at, setAt] = useState<Position>(position);

    const getHint = useCallback(
        (element: Element | null) => {
            if (element === hint.current) return target;
            if (element?.hasAttribute(attribute)) return element;
            return null;
        },
        [attribute, hint, target],
    );

    const getHintData = useCallback(() => {
        setContent(target?.getAttribute(attribute) || '');
        setAt((target?.getAttribute(`${attribute}-at`) as Position) || position);
    }, [attribute, position, target?.getAttribute]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        function toggleHint(event: MouseEvent | FocusEvent): void {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setTarget(getHint(event.target as Element));
                getHintData();
            }, hintDelay);
        }

        if (events.hover) document.addEventListener('mouseover', toggleHint);

        return (): void => {
            clearTimeout(timeout);
        };
    }, [events, getHint, getHintData, hintDelay, target]);

    console.log('Render');

    return (
        <div ref={container} style={{ position: 'relative' }}>
            <div class={`${baseClassName} ${baseClassName}--${at}`} ref={hint} role="tooltip">
                {target && <div className={`${baseClassName}__content`}>{content}</div>}
            </div>
        </div>
    );
}
