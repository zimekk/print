import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// const pathName = require.resolve('vue.runtime.esm.js');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (_env, { mode }, dev = mode === "development") => ({
  target: "node",
  devtool: dev ? "eval" : "source-map",
  entry: {
    index: require.resolve("./src/index.tsx"),
  },
  externalsPresets: { node: true },
  externals: [
    require("webpack-node-externals")({
      additionalModuleDirs: ["../../node_modules"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // https://github.com/kriasoft/isomorphic-style-loader#getting-started
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              // https://github.com/kriasoft/isomorphic-style-loader/issues/201
              esModule: false,
              importLoaders: 1,
              // https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#modules
              modules: {
                exportLocalsConvention: "asIs",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    clean: true,
    library: {
      type: "commonjs2",
    },
    path: path.resolve(__dirname, "lib"),
  },
});
