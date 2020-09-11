import { h, VNode } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

interface Props {
    content: string;
    template?: (content: string) => VNode;
    rootBoundingRect: ClientRect;
    targetBoundingRect: ClientRect;
}

export default function Hint(props: Props): VNode {
    const hint = useRef<HTMLSpanElement>(null);
    const [hintWidth, setHintWidth] = useState(-100);

    useEffect(() => {
        if (hint.current !== null) {
            setHintWidth(hint.current.getBoundingClientRect().width);
        }
    }, [hint]);

    return (
        <div
            id="preact-hint__hint"
            class="preact-hint preact-hint--top fade-in"
            style={{
                bottom: props.rootBoundingRect.height - props.targetBoundingRect.top + props.rootBoundingRect.top + 2,
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