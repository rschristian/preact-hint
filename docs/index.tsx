import withTwind from '@twind/wmr';
import twindConfig from './styles/twind.config.js';

import { Header } from './components/core/Header';
import { Footer } from './components/core/Footer';
import { CodeBlock } from './components/CodeBlock';
import { Option } from './components/Option';

import { install, generalUsage, optionAttribute, optionTemplate } from './codeSamples';

export function App() {
    return (
        <div class="flex(& col) h-full px-5 text(content dark:content-dark) bg([#f8f8f8] dark:[#2a2727])">
            <Header />
            <main class="w-full lg:max-w-4xl flex-1 mb(16 md:32 lg:48) mx-auto">
                <h1 class="mb-2 text(primary(& dark:light) 5xl center lg:left)">
                    Preact Hint
                </h1>
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
                        class="text(primary dark:primary-light hocus:primary-hover!) underline"
                        href="https://preactjs.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        preact
                    </a>
                    . It was designed with a focus on size, adaptability, and ease of use.
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

                <h2 class="mt-6 mb-4 text(primary(& dark:light) 2xl)">Installation</h2>
                <CodeBlock content={install} lang="bash" />

                <h2 class="mt-6 mb-4 text(primary(& dark:light) 2xl)">General Usage</h2>
                <CodeBlock content={generalUsage} lang="jsx" />
                <hr class="h-0.5 my-6" />

                <h2 class="mt-6 mb-4 text(primary(& dark:light) 2xl)">API Options</h2>

                <Option
                    name="attribute"
                    type="string"
                    defaultValue="'data-hint'"
                    description="Sets the HTML attribute to check against for hint content"
                    code={optionAttribute}
                />

                <Option
                    name="template"
                    type="(content: string) => VNode"
                    defaultValue="undefined"
                    description="Callback function for controlling how the hint HTML is formed"
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
            <Footer />
        </div>
    );
}

// @ts-ignore
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
