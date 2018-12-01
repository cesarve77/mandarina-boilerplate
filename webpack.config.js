const path = require('path');
const webpack = require('webpack');


module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            react: path.resolve(path.join(__dirname, './node_modules/react')),
            'babel-core': path.resolve(
                path.join(__dirname, './node_modules/@babel/core'),
            ),
        },
    },
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    entry: {
        runtime: 'regenerator-runtime/runtime',
        app: './app/client/index.tsx',
    },
    devServer: {
        historyApiFallback: {
            disableDotRule: true
        },
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                type: 'javascript/auto',
                test: /\.mjs$/,
                use: []
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,

                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [
                                "@babel/preset-env",
                                {targets: {browsers: "last 2 versions"}} // or whatever your project requires
                            ],
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-class-properties", {loose: true}],
                            "react-hot-loader/babel",
                            "@babel/plugin-syntax-dynamic-import",
                        ]
                    }
                }
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                ]
            },
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                exclude: /(node_modules|\.tests?\.js|\.spec\.js)/,
                use: [
                    {
                        loader: 'webpack-strip-block',
                        options: {
                            start: 'SERVER-START',
                            end: 'SERVER-END'
                        }
                    }
                ]
            }
        ]
    },
    stats: {
        colors: true
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        os: 'empty',
        bcrypt: 'empty',
        path: true,
        child_process: 'empty',
        __filename: true,
        __dirname: true
    },
    externals: ['ws'],

    //devtool: 'source-map',
    devtool: 'inline-source-map',
    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.IgnorePlugin(/jsdom$/),
        new webpack.IgnorePlugin(/\/server\/?/),
        new webpack.IgnorePlugin(/merge-graphql-schemas/),
        new webpack.IgnorePlugin(/graphql-yoga/),
        new webpack.IgnorePlugin(/prisma-binding/),
        new webpack.IgnorePlugin(/bcrypt$/),
        new webpack.IgnorePlugin(/jsonwebtoken/),

    ]

}