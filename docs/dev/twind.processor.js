import { promises as fs } from 'fs';
import { setup } from 'twind';
import { virtualSheet, getStyleTag, shim } from 'twind/shim/server';
import { minify } from 'html-minifier-terser';

const sheet = virtualSheet();

setup({
    hash: false,
    theme: {
        extend: {
            fontSize: {
                '2xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
        },
        colors: {
            primary: {
                dark: '#602020',
                DEFAULT: '#bf4040',
                light: '#DF9F9F',
            },
            secondary: '#253746',
            code: {
                primary: '#ccc',
                background: '#252931',
            },
            steel: {
                dimmer: '#b5b5b5',
                dim: '#ddd',
                DEFAULT: '#ededed',
            },
            white: '#fff',
        },
    },
    sheet,
});

(async function ssr() {
    sheet.reset();

    const html = await fs.readFile('docs/dev/index.html', 'utf8');

    shim(html);
    const styleTag = getStyleTag(sheet);

    await fs.writeFile(
        'docs/index.html',
        minify(html.replace('<style></style>', styleTag), {
            minifyJS: true,
            minifyCSS: true,
            collapseWhitespace: true,
        }),
    );
})();
