debugger

const chokidar = require('chokidar')
const prepare = require('vuepress/lib/prepare')

module.exports = {
    update() {
        prepare(sourceDir).catch(err => {
            console.error(logger.error(chalk.red(err.stack), false))
        })
    },
    chainWebpack(config, isServer) {
        // config 是一个 ChainableConfig 的实例
    },
    ready() {
        debugger
        // watch config file
        const configWatcher = chokidar.watch([
            'docs/.vuepress/config/sidebar.js',
        ], {
                cwd: sourceDir,
                ignoreInitial: true
            })
        configWatcher.on('change', update)
    }

}

