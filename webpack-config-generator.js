import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const generator = options => {
    const common = {
        entry: "./js/index.js",
        output: {
            path: __dirname + "/build",
            filename: "bundle.js"
        },
        module: {
            loaders: [
                { test: /\.js$/, loaders: options.jsLoaders, exclude: /node_modules/ },
                { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader") },
                { test: /\.(jpg|png)$/, loader: "file-loader" }
            ]
        },
        plugins: [
            new ExtractTextPlugin("styles.css", { allChunks: true })
        ].concat(options.plugins)
    };

    return Object.assign(common, options.extends);
};

export default generator;
