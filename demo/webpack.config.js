var fs = require('fs')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = auto_entries({
    devtool: "source-map",
    entry: {
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
    ]
})

function auto_entries(config) {
    var dir = path.resolve(__dirname, 'src')
    var entry_names = fs.readdirSync(dir).filter(function (item) {
        return /\.tsx$/i.test(item)
    })

    entry_names.forEach(function (ename) {
        var ename_ = ename.replace(/\.tsx$/i, '')
        config.entry[ename_] = path.resolve(dir, ename)
        config.plugins.push(new HtmlWebpackPlugin({
            filename: ename_ + '.html',
            chunks: [ename_],
            template: './template.html'
        }))
    })

    // console.log(JSON.stringify(config, null, 4))
    return config
}