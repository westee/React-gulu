const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'Gulu',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx/,
                loader: 'awesome-typescript-loader'
            },
            // {
            //     test: /\.tsx/,
            //     enforce: 'pre',
            //     use: [{loader: 'tslint-loader'}]
            // },
            // {
            //     test: /icons.+\.svg$/,
            //     loader: 'svg-sprite-loader'
            // },
            // {
            //     test: /guui.+\.svg$/,
            //     loader: 'file-loader'
            // },
            // {
            //     test: /\.md$/,
            //     loader: 'text-loader'
            // },
        ]
    }
}