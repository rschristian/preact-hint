import purgeCss from '@fullhuman/postcss-purgecss';

export default {
    webpack(config, env, helpers) {
        const nonModuleStyleLoader = config.module.rules[5];
        nonModuleStyleLoader.sideEffects = true;

        const purgecss = purgeCss({
            content: ['src/**/*.tsx', 'src/**/*.ts'],
            whitelist: ['html', 'body'],
        });

        const postCss = helpers.getLoadersByName(config, 'postcss-loader')[0];
        if (env.production) {
            // config.output.publicPath = 'https://rschristian.github.io/preact-hint';
            postCss.loader.options.plugins.push(purgecss);
        }
    },
};
