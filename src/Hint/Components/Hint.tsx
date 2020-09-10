import { ComponentChild, h, VNode } from 'preact';

interface Props {
    content: string | ComponentChild;
    timeout: number;
}

export default function Hint(props: Props): VNode {
    return (
        <div
            id="preact-hint__hint"
            class="preact-hint preact-hint--top fade-in"
            style={{ bottom: 6, left: 51.2 - 128 - 5 }}
        >
            <span class="preact-hint__content">{props.content}</span>
        </div>
    );
}
