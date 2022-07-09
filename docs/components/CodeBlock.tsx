import { useMemo } from 'preact/hooks';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
Prism.manual = true;

type Props = {
    content: string;
    lang: 'jsx' | 'bash';
};

export function CodeBlock({ content, lang }: Props) {
    const isBash = lang == 'bash';
    const htmlObj = useMemo(
        () => ({ __html: Prism.highlight(content, Prism.languages[lang]) }),
        [content],
    );
    return (
        <pre
            class="p-4 bg-code(& dark:dark) shadow-lg rounded-lg overflow-x-auto"
            tabIndex={0}
        >
            <code class={isBash ? 'lang-bash' : 'lang-jsx'} dangerouslySetInnerHTML={htmlObj} />
        </pre>
    );
}
