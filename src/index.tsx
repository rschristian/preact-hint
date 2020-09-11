import { h, VNode } from 'preact';

import PreactHint from './Hint';

export default function App(): VNode {
    return (
        <div class="preview">
            <PreactHint>
                <button>Hello World</button>
                <button data-preact-hint="Hello World">Hello Ryan</button>
                <button>Hello World</button>
                <button data-preact-hint="Hello World">Hello Ryan</button>
                <button>Hello World</button>
                <button data-preact-hint="Hello World">Hello Ryan</button>
            </PreactHint>
        </div>
    );
}
