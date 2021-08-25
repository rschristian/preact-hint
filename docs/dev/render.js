import { hydrate } from 'preact';
import { html } from 'htm/preact';
import PreactHint from '../../src/index';

hydrate(
    html`
        <${PreactHint}>
            <button>
                Hover Me!
            </button>
        <//>
    `,
    document.getElementById('hint-demo'),
);
