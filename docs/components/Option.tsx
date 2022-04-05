import { VNode } from 'preact';
import { CodeBlock } from './CodeBlock';

type Props = {
    name: string;
    type: string;
    default: string;
    description: string;
    code: string;
    demo?: VNode;
};

export function Option(props: Props) {
    return (
        <div class="mb-12 mx-3 p-5 bg-card(& dark:dark) shadow-inner rounded-2xl">
            <h3 class="mb-2 text(primary(& dark:light) xl)">• {props.name}</h3>
            <p class="mb-1 ml-3">Type:
                <span class="ml-1 px-1 py-px bg(code-inline opacity-25) rounded-md">{props.type}</span>
            </p>
            <p class="mb-4 ml-3">Default:
                <span class="ml-1 px-1 py-px bg(code-inline opacity-25) rounded-md">{props.default}</span>
            </p>
            <p class="mb-8 ml-3">{props.description}</p>
            <CodeBlock content={props.code} lang="jsx" />
            {props.demo}
        </div>
    );
}
