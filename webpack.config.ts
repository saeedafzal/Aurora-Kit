import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const postcssLoader = {
    loader: "postcss-loader",
    options: {
        postcssOptions: {
            plugins: ["autoprefixer", "cssnano"]
        }
    }
};

const config: Configuration = {
    mode: "none",
    entry: "./ts/index.ts",

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "aurora.min.js",
        library: "A"
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    postcssLoader,
                    "less-loader"
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "aurora.min.css" })
    ]
};

export default config;
