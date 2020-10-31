import { h, VNode } from 'preact';
import 'bulma/css/bulma.min.css';

import PreactHint from '../src';
import './style.css';

export default function App(): VNode {
    return (
        <div id="app">
            <section class="hero">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h2 class="is-size-2 has-text-weight-bold">preact-hint</h2>
                        <h6 class="is-size-6">Lightweight and extensible tooltip component for Preact</h6>
                        <a class="button" href="https://github.com/rschristian/preact-hint">
                            Check it out on GitHub
                        </a>
                    </div>
                </div>
            </section>
            <div class="section main-content">
                <div class="container">
                    <h3 class="is-size-3">Preact Hint</h3>
                    <div class="shields mt-1">
                        <a href="https://github.com/rschristian/preact-hint/blob/master/LICENSE">
                            <img alt="NPM" src="https://img.shields.io/npm/l/preact-hint?color=blue" />
                        </a>
                        <a href="https://bundlephobia.com/result?p=preact-hint">
                            <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/preact-hint" />
                        </a>
                        <a href="https://npmjs.org/package/preact-hint">
                            <img
                                alt="0 Dependencies"
                                src="https://img.shields.io/david/rschristian/preact-hint?color=blue"
                            />
                        </a>
                        <a href="https://npmjs.org/package/preact-hint">
                            <img alt="TS Support" src="https://img.shields.io/npm/types/preact-hint" />
                        </a>
                    </div>
                    <div class="mt-2">
                        Preact-Hint is a lightweight and extensible tooltip component for{' '}
                        <a href="https://preactjs.com">Preact</a>. It was designed with a focus on size, adaptability,
                        and ease of use.
                    </div>
                    <PreactHint>
                        <button class="button mt-4" data-preact-hint="Hello World!">
                            Hover Me!
                        </button>
                    </PreactHint>
                    <h4 class="is-size-4 mt-5 mb-2">Installation</h4>
                    <pre>
                        <code>yarn add preact-hint</code>
                    </pre>
                    <h4 class="is-size-4 mt-5 mb-2">General Usage</h4>
                    <pre>
                        <code>{`import PreactHint from 'preact-hint';
import 'preact-hint/dist/index.css';

export default function App() {
    return (
        <PreactHint>
            <button data-preact-hint="Hello World!">Hover over me!</button>
        </PreactHint>
    );
}`}</code>
                    </pre>
                    <h4 class="is-size-4 mt-5 mb-2">BYOT (Bring Your Own Template) Usage</h4>
                    <pre>
                        <code>{`import PreactHint from 'preact-hint';
import 'preact-hint/dist/index.css';

export default function App() {
    return (
        <PreactHint
            template={(content) => {
                const stringPieces = content.split(',');
                return (
                    <Fragment>
                        <strong>{stringPieces[0]} Contributions</strong> on 
                        {new Date(stringPieces[1]).toLocaleDateString()}
                    </Fragment>
                );
            }}
        >
            <button data-preact-hint={['0', '2019-09-14']}>Hover over me!</button>
        </PreactHint>
    );
}`}</code>
                    </pre>
                </div>
            </div>
            <footer class="footer">
                <div class="container has-text-centered">
                    <span>&copy; 2020 Ryan Christian</span>
                </div>
            </footer>
        </div>
    );
}
