import { VNode } from 'preact';
import { CodeBlock } from './CodeBlock';

type Props = {
    name: string;
    default: string;
    code: string;
    demo?: VNode;
};

export function Option(props: Props) {
    return (
        <div class="mb-12 mx-3">
            <h5 class="mb-2 text(primary dark:primary-light xl)">• {props.name}</h5>
            <h4 class="mb-4 ml-3">Default: {props.default}</h4>
            <CodeBlock content={props.code} lang="jsx" />
            {props.demo}
        </div>
    );
}
