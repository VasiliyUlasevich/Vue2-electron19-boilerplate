const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
    let devMode = argv ? argv.mode !== "production" : true;

    const config = {
        mode: devMode ? 'development' : 'production',
        entry: "./src/js/main.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "js/bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.vue$/i,
                    exclude: [/node_modules/],
                    use: "vue-loader",
                },
                {
                    test: /\.css$/i,
                    exclude: [/node_modules/],
                    use: [
                        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: false,
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: "src/index.html",
                        to: "index.html",
                        transform(content, absoluteForm) {
                            return content.toString().replace('[STYLESHEET]', devMode ? '' : '<link rel="stylesheet" href="css/styles.css">');
                        }
                    },
                ],
            }),
        ].concat(
            devMode
                ? []
                : [new MiniCssExtractPlugin({ filename: "css/styles.css" })]
        ),
        resolve: {
            alias: {
                vue: 'vue/dist/vue.esm.js',
            },
        },
    };

    return config;
};
