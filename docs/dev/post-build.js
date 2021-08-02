import { promises as fs } from 'fs';

(async function rewriteImports() {
    let module = await fs.readFile('docs/dev/preact-hint.js', { encoding: 'utf-8' });
    module = module.replace(/(?<=from")(preact)/g, 'https://cdn.skypack.dev/preact');
    await fs.writeFile('docs/preact-hint.js', module);
    await fs.copyFile('docs/dev/style.css', 'docs/preact-hint.css');
})();
