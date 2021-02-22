"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var config = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, './dist/'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    optimization: {
        chunkIds: 'named',
    },
    plugins: [
        new html_webpack_plugin_1.default({
            templateContent: "\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>test</title>\n      </head>\n      <body>\n      <div id=\"app\"></div>\n      </body>\n      </html>\n  ",
        }),
    ],
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'dist/'),
        watchContentBase: true,
        inline: true,
    },
};
exports.default = config;
