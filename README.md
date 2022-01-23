<h1 align="center">Preact Hint</h1>

<div align="center">
    <a href="https://github.com/rschristian/preact-hint/blob/master/LICENSE">
        <img
           alt="NPM"
           src="https://img.shields.io/npm/l/preact-hint?color=blue"
         />
    </a>
</div>

<br />

Preact-Hint is a tiny component library used for displaying tooltips. Try out [the demo](https://preact-hint.rschristian.dev/)!

## Install

```
$ yarn add preact-hint
```

## Usage

```jsx
import Hint from 'preact-hint';
import 'preact-hint/dist/index.css';

export default function App() {
    return (
        <Hint>
            <button data-hint="Hello World!">Hover over me!</button>
        </Hint>
    );
}
```

## API

### attribute

type: `string`<br/>
deault: `data-hint`

Allows you to customize which attribute contains hint data on the element.

```jsx
<Hint attribute="data-foo">
    <button data-foo="Hello World!">Hover over me!</button>
</Hint>
```

### template

type: `(content: string) => VNode`<br/>
default: `undefined`

Allows you to customize the content within the tooltip. See the following example:

```jsx
<Hint
    template={(content) => {
        const stringPieces = content.split(',');
        return (
            <Fragment>
                <strong>{stringPieces[0]} Contributions</strong> on {stringPieces[1]}
            </Fragment>
        );
    }}
>
    <button data-hint={['0', '2019-09-14']}>Hover over me!</button>
</Hint>
```

## License

MIT © Ryan Christian
