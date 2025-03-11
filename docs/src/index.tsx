import { Root, Header, Main, Footer } from '@rschristian/intrepid-design';
import { CodeBlock, Option } from '@rschristian/intrepid-design/docs';
import { withTwind } from '@rschristian/twind-preact-iso';
import dedent from 'dedent';

import Hint from './preact-hint/preact-hint.js';
import './preact-hint/preact-hint.css';

export function App() {
    return (
        <Root>
            <Header RSC={{ href: 'https://github.com/rschristian', label: 'My GitHub Account' }}>
                <Header.NavItem
                    href="https://github.com/rschristian/preact-hint"
                    label="Source Code on GitHub"
                    iconId="github"
                />
                <Header.NavItem
                    href="https://twitter.com/_rschristian"
                    label="Twitter Account"
                    iconId="twitter"
                />
                <Header.NavItem
                    href="https://bsky.app/profile/rschristian.dev"
                    label="Bluesky Account"
                    iconId="bluesky"
                />
                <Header.ThemeToggle />
            </Header>
            <Main>
                <h1 class="mb-2 text(primary(& dark:light) 5xl center lg:left)">Preact Hint</h1>
                <div class="flex justify(center lg:left) mb-12">
                    <a
                        href="https://github.com/rschristian/preact-hint/blob/master/LICENSE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            width="78"
                            height="20"
                            alt="License: MIT"
                            src="https://img.shields.io/npm/l/preact-hint?color=%23df6060"
                        />
                    </a>
                </div>
                <p class="text-xl mb-2">
                    Preact-Hint is a lightweight and extensible tooltip component for{' '}
                    <a
                        class="text(primary dark:primary-light hocus:!primary-hover) underline"
                        href="https://preactjs.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        preact
                    </a>
                    . It was designed with a focus on size, adaptability, and ease of use.
                </p>
                <div class="mt-4">
                    <Hint>
                        <button
                            class="px-4 py-2 bg-primary text-white rounded-lg"
                            data-hint="Hello World!"
                        >
                            Hover Me!
                        </button>
                    </Hint>
                </div>

                <h2 class="mt-6 mb-4 text(primary(& dark:light) 2xl)">Installation</h2>
                <CodeBlock content="$ npm install preact-hint" lang="bash" />

                <h2 class="mt-6 mb-4 text(primary(& dark:light) 2xl)">General Usage</h2>
                <CodeBlock
                    content={dedent`
                        import Hint from 'preact-hint';
                        import 'preact-hint/dist/index.css';

                        export default function App() {
                            return (
                                <Hint>
                                    <button data-hint="Hello World!">Hover over me!</button>
                                </Hint>
                            );
                        }
                    `}
                    lang="jsx"
                />
                <hr class="h-0.5 my-6" />

                <h2 class="mt-6 mb-4 text(primary(& dark:light) 2xl)">API Options</h2>

                <Option
                    name="attribute"
                    type="string"
                    defaultValue="'data-hint'"
                    description="Sets the HTML attribute to check against for hint content"
                    code={dedent`
                        <Hint attribute="data-foo">
                            <button data-foo="Hello World!">Hover over me!</button>
                        </Hint>
                    `}
                />

                <Option
                    name="template"
                    type="(content: string) => VNode"
                    defaultValue="undefined"
                    description="Callback function for controlling how the hint HTML is formed"
                    code={dedent`
                        <Hint
                            template={(content) => {
                                const stringPieces = content.split(',');
                                return (
                                    <Fragment>
                                        <strong>{stringPieces[0]} contributions</strong> on {stringPieces[1]}
                                    </Fragment>
                                );
                            }}
                        >
                            <button data-hint="10,2019-09-14">Hover over me!</button>;
                        </Hint>
                    `}
                    demo={
                        <div class="mt-4">
                            <Hint
                                template={(content: string) => {
                                    const stringPieces = content.split(',');
                                    return (
                                        <>
                                            <strong>{stringPieces[0]} contributions</strong> on{' '}
                                            {stringPieces[1]}
                                        </>
                                    );
                                }}
                            >
                                <button
                                    class="px-4 py-2 bg-primary text-white rounded-lg"
                                    data-hint="10,2019-09-14"
                                >
                                    Hover Me!
                                </button>
                            </Hint>
                        </div>
                    }
                />
            </Main>
            <Footer year={2021} />
        </Root>
    );
}

const { hydrate, prerender } = withTwind(
    () => import('./styles/twind.config.js'),
    () => <App />,
);

hydrate(<App />);

export { prerender };
