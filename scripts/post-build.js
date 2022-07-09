import { promises as fs } from 'node:fs';

let html = await fs.readFile('build/index.html', 'utf-8');

// Scripts
const themeSwitcherJS = await fs.readFile(
    `build/${(await fs.readdir('build')).find((entry) => /^themeSwitcher/.test(entry))}`,
    'utf-8',
);
html = html.replace(/\n\s*<script.*\/index[^\n]*/g, '');
html = html.replace(
    /<script.*\/themeSwitcher[^\n]*/g,
    `<script type="module">${themeSwitcherJS}</script>`,
);

// CSS
const globalCSS = await fs.readFile(
    `build/assets/styles/${(await fs.readdir('build/assets/styles'))[0]}`,
    'utf-8',
);
html = html.replace(/<link.*href=".*global[^\n]*/, `<style>${globalCSS}</style>`);

await fs.writeFile('build/index.html', html);
