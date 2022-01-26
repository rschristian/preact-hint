import { promises as fs } from 'node:fs';

(async function removeScripts() {
    const linkRegex = /\n\s*<link(?:\s[^>]*)?\s+href=(['"])\/index\.\w{8}\.js.*/;
    const scriptRegex = /\n\s*<script(?:\s[^>]*)?\s+src=(['"])\/index\.\w{8}\.js.*/;

    let html = await fs.readFile('build/index.html', 'utf-8');
    if (linkRegex.test(html)) html = html.replace(linkRegex, '');
    if (scriptRegex.test(html)) html = html.replace(scriptRegex, '');
    await fs.writeFile('build/index.html', html);
})();
