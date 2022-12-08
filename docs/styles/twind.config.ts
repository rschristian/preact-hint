import { defineConfig } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';

export const twindConfig = defineConfig({
    darkMode: 'class',
    presets: [presetTailwind()],
    hash: false,
    theme: {
        colors: {
            primary: {
                dark: '#602020',
                DEFAULT: '#bf4040',
                light: '#df6060',
                hover: '#ff7b72',
            },
            content: {
                DEFAULT: '#24292f',
                dark: '#ddd',
            },
            card: {
                DEFAULT: '#f3f1f0',
                dark: '#463a34',
            },
            code: {
                DEFAULT: '#fff',
                inline: '#99a1b3',
                dark: '#1b1818',
            },
            white: {
                muted: '#999',
                DEFAULT: '#ffffff',
            },
            transparent: 'transparent',
        },
        extend: {
            fontSize: {
                '2xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
        },
    },
    variants: [['hocus', '&:hover,&:focus-visible']]
});
