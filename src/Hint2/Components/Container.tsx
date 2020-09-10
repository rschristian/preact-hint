import { ComponentChild, h, VNode } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import Hint from './Hint';

interface Props {
    children: ComponentChild | ComponentChild[];
    template?: (content: string) => VNode;
}

export default function Container(props: Props): VNode {
    const root = useRef<HTMLDivElement>(null);

    const [rootBoundingRect, setRootBoundingRect] = useState<ClientRect | null>(null);
    const [targetBoundingRect, setTargetBoundingRect] = useState<ClientRect | null>(null);
    const [html, setHtml] = useState<string | null>(null);

    useEffect(() => {
        if (root.current !== null) {
            setRootBoundingRect(root.current.getBoundingClientRect());
            root.current.addEventListener('mouseover', (e) => {
                if (e.target instanceof Element && e.target.hasAttribute('preact-hint-data')) {
                    setHtml(e.target.getAttribute('preact-hint-data'));
                    setTargetBoundingRect(e.target.getBoundingClientRect());
                }
            });
            root.current.addEventListener('mouseout', (e) => {
                if (e.target instanceof Element && e.target.hasAttribute('preact-hint-data')) {
                    setHtml(null);
                    setTargetBoundingRect(null);
                }
            });
        }
    }, [root]);

    return (
        <div id="preact-hint__root" ref={root} style={{ position: 'relative' }}>
            {html !== null && rootBoundingRect !== null && targetBoundingRect !== null && (
                <Hint
                    content={html}
                    template={props.template}
                    rootBoundingRect={rootBoundingRect}
                    targetBoundingRect={targetBoundingRect}
                />
            )}
            {props.children}
        </div>
    );
}
