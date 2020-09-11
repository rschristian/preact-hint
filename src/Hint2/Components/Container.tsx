import { ComponentChild, h, VNode } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import Hint from './Hint';

interface Props {
    children: ComponentChild | ComponentChild[];
    template?: (content: string) => VNode;
}

export default function Container(props: Props): VNode {
    const [root, setRoot] = useState<HTMLDivElement | null>(null);

    const [targetBoundingRect, setTargetBoundingRect] = useState<ClientRect | null>(null);
    const [html, setHtml] = useState<string | null>(null);

    const onRefChange = useCallback(
        (node: HTMLDivElement | null) => {
            setRoot(node);
            if (root !== null) {
                // setRootBoundingRect(root.getBoundingClientRect());
                root.addEventListener('mouseover', (e) => {
                    if (e.target instanceof Element && e.target.hasAttribute('preact-hint-data')) {
                        setHtml(e.target.getAttribute('preact-hint-data'));
                        setTargetBoundingRect(e.target.getBoundingClientRect());
                    }
                });
                root.addEventListener('mouseout', (e) => {
                    if (e.target instanceof Element && e.target.hasAttribute('preact-hint-data')) {
                        setHtml(null);
                        setTargetBoundingRect(null);
                    }
                });
            }
        },
        [root],
    );

    return (
        <div id="preact-hint__root" ref={onRefChange} style={{ position: 'relative' }}>
            {html !== null && root !== null && targetBoundingRect !== null && (
                <Hint
                    content={html}
                    template={props.template}
                    rootBoundingRect={root.getBoundingClientRect()}
                    targetBoundingRect={targetBoundingRect}
                />
            )}
            {props.children}
        </div>
    );
}
