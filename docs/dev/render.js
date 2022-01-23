import { hydrate } from 'preact';
import { html } from 'htm/preact';
import Hint from '../../src/index';

hydrate(
    html`
        <${Hint}>
            <button>Hover Me!</button>
        <//>
    `,
    document.getElementById('hint-demo'),
);

hydrate(
    html`
        <${Hint}
            template=${(content) => {
                const stringPieces = content.split(',');
                return html`
                    <strong>${stringPieces[0]} contributions</strong> on ${stringPieces[1]}
                `;
            }}
        >
            <button>Hover Me!</button>
        <//>
    `,
    document.getElementById('options-template'),
);
