export default {
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
        },
    },
    variants: {
        light: '@media (prefers-color-scheme:light)',
    },
};
