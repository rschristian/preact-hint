import { h, VNode } from 'preact';

import PreactHint from './Hint2';
import './Hint2/index.css';

export default function App(): VNode {
    return (
        <div class="preview">
            <PreactHint>
                <button>Hello World</button>
                <button preact-hint-data="Hello World">Hello Ryan</button>
                <button>Hello World</button>
                <button preact-hint-data="Hello World">Hello Ryan</button>
                <button>Hello World</button>
                <button preact-hint-data="Hello World">Hello Ryan</button>
            </PreactHint>
        </div>
    );
}
