import purgeCss from '@fullhuman/postcss-purgecss';

export default {
    webpack(config, env, helpers) {
        const purgecss = purgeCss({
            content: ['src/**/*.tsx', 'src/**/*.ts'],
            whitelist: ['html', 'body'],
        });

        const postCss = helpers.getLoadersByName(config, 'postcss-loader')[0];
        if (env.production) postCss.loader.options.plugins.push(purgecss);
    },
};
