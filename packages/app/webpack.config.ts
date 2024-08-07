import path from "path";
import { Subject } from "rxjs";
import { withLatestFrom } from "rxjs/operators";

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

class RequireResolvePlugin {
  options = {};
  constructor(options = {}) {
    Object.assign(this, { options });
  }

  emit(compilation, callback) {
    const asset = compilation.assets["index.js"];
    resolve(require("require-from-string")(asset.source()).router);
    return callback();
  }

  apply(compiler) {
    const { name } = this.constructor;
    compiler.hooks.emit.tapAsync({ name }, this.emit.bind(this));
  }
}

const subject$ = new Subject();
const resolve$ = new Subject();

const resolve = (fn: any) => resolve$.next(fn);
const middleware = (...args: any) => subject$.next(args);
subject$
  .pipe(withLatestFrom(resolve$))
  .subscribe(([args, fn]: any) => fn(...args));

const config = (_env, { mode }, dev = mode === "development") => ({
  name: "server",
  target: "node",
  devtool: dev ? "eval" : "source-map",
  entry: {
    index: require.resolve("./src"),
  },
  externalsPresets: { node: true },
  externals: [
    require("webpack-node-externals")({
      allowlist: [/^@dev\//],
      additionalModuleDirs: ["../../node_modules"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // https://github.com/kriasoft/isomorphic-style-loader#getting-started
        use: [
          // MiniCssExtractPlugin.loader,
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
    // minimizer: [
    //   new CssMinimizerPlugin(),
    // ],
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
  plugins: [
    // new MiniCssExtractPlugin(),
    dev && new RequireResolvePlugin(),
  ].filter(Boolean),
});

export default (env, argv) =>
  Promise.all([
    (({ devServer, output, ...config }) => ({
      name: "client",
      ...config,
      devServer: {
        ...devServer,
        setupMiddlewares: (middlewares, devServer) => {
          if (!devServer) {
            throw new Error("webpack-dev-server is not defined");
          }

          // onBeforeSetupMiddleware
          devServer.app.use(middleware);

          return middlewares;
        },
      },
      output: {
        ...output,
        path: path.resolve(__dirname, "public"),
      },
    }))(require("@dev/web/webpack.config").default(env, argv)),
    config(env, argv),
  ]);
