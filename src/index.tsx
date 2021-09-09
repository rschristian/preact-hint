import { h } from 'preact';
import type { ComponentChild, VNode } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

import './style.css';

interface Props {
    children: ComponentChild | ComponentChild[];
    attribute?: string;
    template?: (content: string) => VNode;
}

export default function Container(props: Props): VNode {
    const attribute = props.attribute || 'data-hint';
    const [content, setContent] = useState<string>('');
    const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null);
    const [targetBoundingRect, setTargetBoundingRect] = useState<ClientRect | null>(null);

    const onRefChange = useCallback(
        (node: HTMLDivElement | null) => {
            setContainerElement(node);
            if (containerElement) {
                containerElement.addEventListener('mouseover', (e) => {
                    if (e.target instanceof Element && e.target.hasAttribute(attribute)) {
                        setContent(e.target.getAttribute(attribute) || '');
                        setTargetBoundingRect(e.target.getBoundingClientRect());
                    }
                });
                containerElement.addEventListener('mouseout', (e) => {
                    if (e.target instanceof Element && e.target.hasAttribute(attribute)) {
                        setContent('');
                        setTargetBoundingRect(null);
                    }
                });
            }
        },
        [containerElement],
    );

    return (
        <div ref={onRefChange} style="position: relative">
            {content && containerElement && targetBoundingRect && (
                <Hint
                    content={content}
                    template={props.template}
                    rootBoundingRect={containerElement.getBoundingClientRect()}
                    targetBoundingRect={targetBoundingRect}
                />
            )}
            {props.children}
        </div>
    );
}

interface HintProps {
    content: string;
    template?: (content: string) => VNode;
    rootBoundingRect: ClientRect;
    targetBoundingRect: ClientRect;
}

export function Hint(props: HintProps): VNode {
    const hint = useRef<HTMLSpanElement>(null);
    // Render way off-screen to prevent rubber banding from initial (and unavoidable) render.
    const [hintWidth, setHintWidth] = useState(10000);

    useEffect(() => {
        if (hint.current) {
            setHintWidth(hint.current.getBoundingClientRect().width);
        }
    }, [hint]);

    return (
        <div
            class="preact-hint preact-hint__fade-in"
            style={{
                bottom:
                    props.rootBoundingRect.height -
                    props.targetBoundingRect.top +
                    props.rootBoundingRect.top +
                    2,
                left:
                    props.targetBoundingRect.left -
                    props.rootBoundingRect.left -
                    hintWidth / 2 +
                    props.targetBoundingRect.width / 2,
            }}
        >
            <span class="preact-hint__content" ref={hint}>
                {props.template ? props.template(props.content) : props.content}
            </span>
        </div>
    );
}
