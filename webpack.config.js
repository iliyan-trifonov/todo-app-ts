const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "inline-source-maps",
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        loaders: [
            {test: /\.ts/, loader: "ts-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            inject: "body",
            hash: true
        })
    ]
};