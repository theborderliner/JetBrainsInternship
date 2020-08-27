const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/pages/index.js",
    output: {
        path: __dirname + "/build", // Folder to store generated bundle
        filename: "project.js",  // Name of generated bundle after build
        publicPath: "/" // public URL of the output directory when referenced in a browser
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {loader: "image-webpack-loader"}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/pages/index.html",
            inject: "body"
        }),
    ],
    devServer: {
        contentBase: "/src/pages"
    }
}