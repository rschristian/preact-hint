import { promises as fs } from 'node:fs';

(async function removeScripts() {
    const linkRegex = /\n\s*<link(?:\s[^>]*)?\s+href=(['"])\/index\.\w{8}\.js.*/;
    const scriptRegex = /\n\s*<script(?:\s[^>]*)?\s+src=(['"])\/index\.\w{8}\.js.*/;

    let html = await fs.readFile('build/index.html', 'utf-8');
    if (linkRegex.test(html)) html = html.replace(linkRegex, '');
    if (scriptRegex.test(html)) html = html.replace(scriptRegex, '');
    await fs.writeFile('build/index.html', html);
})();

(async function inlineCSS() {
    const linkRegex = /<link rel="stylesheet" href="\/assets\/styles([^\n]*)/;
    const css = await fs.readFile(
        `build/assets/styles/${(await fs.readdir('build/assets/styles'))[0]}`,
        'utf-8',
    );

    let html = await fs.readFile('build/index.html', 'utf-8');
    if (linkRegex.test(html)) {
        html = html.replace(linkRegex, `<style>${css}</style>`);
        await fs.writeFile('build/index.html', html);
    }
})();
