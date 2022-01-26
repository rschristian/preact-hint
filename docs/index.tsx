import withTwind from '@twind/wmr';
import twindConfig from './styles/twind.config.js';

import { Header } from './components/Header';
import { CodeBlock } from './components/CodeBlock';
import { Option } from './components/Option';

import { install, generalUsage, optionAttribute, optionTemplate } from './codeSamples';

export function App() {
    return (
        <div class="flex(& col) h-full">
            <Header />
            <main class="w-full lg:max-w-screen-lg mx-auto px-6 py-12 flex-auto">
                <h1 class="mb-2 text(primary dark:primary-light 4xl center lg:left)">
                    Preact Hint
                </h1>
                <p class="text-xl mb-2">
                    Preact-Hint is a lightweight and extensible tooltip component for{' '}
                    <a
                        class="text(primary dark:primary-light hover:[#ff7b72]) underline"
                        href="https://preactjs.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        preact
                    </a>. It was designed with a focus on size, adaptability, and ease of use.
                </p>
                <div id="hint-demo" class="mt-4">
                    <div style="position: relative">
                        <button
                            class="px-4 py-2 bg-primary text-white rounded-lg"
                            data-hint="Hello World!"
                        >
                            Hover Me!
                        </button>
                    </div>
                </div>

                <h4 class="mt-6 mb-4 text(primary dark:primary-light 2xl)">Installation</h4>
                <CodeBlock content={install} lang="bash" />

                <h4 class="mt-6 mb-4 text(primary dark:primary-light 2xl)">General Usage</h4>
                <CodeBlock content={generalUsage} lang="jsx" />
                <hr class="h-0.5 my-6" />

                <h4 class="mt-6 mb-4 text(primary dark:primary-light 2xl)">Options</h4>

                <Option name="attribute" default="'data-hint'" code={optionAttribute} />

                <Option
                    name="template"
                    default="undefined"
                    code={optionTemplate}
                    demo={
                        <div id="options-template" class="mt-4">
                            <div style="position: relative">
                                <button
                                    class="px-4 py-2 bg-primary text-white rounded-lg"
                                    data-hint="10,2019-09-14"
                                >
                                    Hover Me!
                                </button>
                            </div>
                        </div>
                    }
                />
            </main>
        </div>
    );
}

const { hydrate, prerender } = withTwind(
    {
        props: {
            tw: false,
            css: false,
            className: true,
        },
        ...twindConfig,
    },
    () => <App />,
);

hydrate(<App />);

export { prerender };
