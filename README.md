<div align="center">
  <img src="https://github.com/ryanchristian4427/preact-github-calendar/blob/master/media/carbon.svg?raw=true" alt="Preact Hint" width="600" />
</div>

<h1 align="center">Preact Hint</h1>

<div align="center">
    <a href="https://github.com/RyanChristian4427/preact-hint/blob/master/LICENSE">
        <img alt="NPM" src="https://img.shields.io/npm/l/preact-hint?color=brightgreen">
    </a>
    <a href="https://bundlephobia.com/result?p=preact-hint">
        <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/preact-hint">
    </a>
</div>

<br />

Preact Hint is a tiny component library used for displaying tooltips.

## Install

```
$ yarn add preact-hint
```

## Usage

```jsx
import PreactHint from 'preact-hint';
import 'preact-hint/dist/index.css';

export default function App() {
    return (
        <PreactHint>
            <button data-preact-hint="Hello World!">Hover over me!</button>
        </PreactHint>
    );
}
```

## API

Currently, this library only offers functionality for customizing the content within the tooltip itself. This is entirely optional.

### template
type: `(content: string) => VNode`<br/>
default: `undefined`

Allows you to customize the content within the tooltip. See the following example:

```jsx
<PreactHint
    template={(content) => {
        const stringPieces = content.split(',');
        return (
            <Fragment>
                <strong>{stringPieces[0]} Contributions</strong> on {stringPieces[1]}
            </Fragment>
        );
    }}
>
    <button data-preact-hint={['0', '2019-09-14']}>Hover over me!</button>
</PreactHint>
```

## License

MIT © Ryan Christian