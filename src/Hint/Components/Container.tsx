import { ComponentChild, h, VNode } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import Hint from './Hint';

interface Props {
    children: ComponentChild | ComponentChild[];
    template?: (content: string) => VNode;
}

const attribute = 'data-preact-hint';

export default function Container(props: Props): VNode {
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
        <div ref={onRefChange} style={{ position: 'relative' }}>
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
