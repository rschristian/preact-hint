import dedent from 'dedent';

export const install = '$ yarn add preact-hint';

export const generalUsage = dedent`
    import Hint from 'preact-hint';
    import 'preact-hint/dist/index.css';

    export default function App() {
        return (
            <Hint>
                <button data-hint="Hello World!">Hover over me!</button>
            </Hint>
        );
    }`;

export const optionAttribute = dedent`
    <Hint attribute="data-foo">
        <button data-foo="Hello World!">Hover over me!</button>
    </Hint>`;

export const optionTemplate = dedent`
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
    </Hint>`;
