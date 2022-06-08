const Encore = require('@symfony/webpack-encore')
const path = require('path')

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
    .enableVueLoader()
    .setOutputPath('public/build/')
    // .setOutputPath('build/')
    .setPublicPath('/build')
    .addLoader({
        test: /\.(vue)$/,
        use: {
            loader: 'vue-loader',
            options: {
                emitCss: true,
                hotReload: true,
                dev: true,
            },
        },
    })
    .addAliases({
        '@': path.resolve('assets/js')
    })
    .addEntry('app', './assets/js/app.js')
    // .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSingleRuntimeChunk()
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    // .enableSassLoader()

const config = Encore.getWebpackConfig();
config.resolve.mainFields = ['vue', 'browser', 'module', 'main']
config.resolve.extensions =  ['.wasm', '.mjs', '.js', '.json', '.jsx', '.vue', '.ts', '.tsx', '.vue']

module.exports = config