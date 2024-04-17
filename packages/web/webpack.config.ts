import path from "path";
import webpack from "webpack";
import env from "dotenv";

env.config({ path: path.resolve(__dirname, "../../.env") });

export default (env, { mode }, dev = mode === "development") => ({
  target: "web",
  devtool: dev ? "eval-cheap-source-map" : "source-map",
  entry: {
    main: require.resolve("./src"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              esModule: false,
              // https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#modules
              modules: {
                exportLocalsConvention: "asIs",
              },
            },
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(avi|jpg|mp3|ogg|png|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          plugins: [],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      events: "events",
    },
    // https://webpack.js.org/configuration/resolve/#resolvefallback
    fallback: {
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({}),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    // https://webpack.js.org/plugins/copy-webpack-plugin/
    new (require("copy-webpack-plugin"))({
      patterns: [
        {
          context: path.resolve(__dirname, "src/assets"),
          from: "print/*.pdf",
        },
      ],
    }),
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new (require("html-webpack-plugin"))({
      title: require("./package").name,
      favicon: require.resolve("./src/assets/favicon.ico"),
    }),
  ].filter(Boolean),
});
