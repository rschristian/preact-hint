// @ts-nocheck
import { hydrate } from 'preact';
import { html } from 'htm/preact';
import Hint from '../../src/index';

(async function hydrateWidget() {
    if (typeof document !== 'undefined') {
        // preact-hint needs to be loaded first as WMR expects
        // last script have a prerender, but this means we need
        // to wait for WMR to hydrate the DOM in dev
        if (import.meta.env.NODE_ENV !== 'production') {
            while (!document.querySelector('#hint-demo')) {
                await new Promise((r) => setTimeout(r, 250));
            }
        }

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
    }
})();
