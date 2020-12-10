const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

const config = {
  entry: [__dirname + "/src/js/index.js", __dirname + "/src/scss/style.scss"],
  output: {
    path: path.resolve(__dirname, "dist"), // Folder to store generated bundle
    filename: "./js/bundle.js", // Name of generated bundle after build
    publicPath: "/", // public URL of the output directory when referenced in a browser
  },
  devtool: "source-map",
  mode: "production",
  module: {
    // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "last 4 version, > 0.2%",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "src/scss"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: () => [
                  require("cssnano")({
                    preset: [
                      "default",
                      {
                        discardComments: {
                          removeAll: true,
                        },
                      },
                    ],
                  }),
                ],
                plugins: [
                  autoprefixer(),
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src/html/includes"),
        use: ["raw-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.bundle.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/fonts",
          to: "./fonts",
        },
        {
          from: "./src/favicon",
          to: "./favicon",
        },
        {
          from: "./src/img",
          to: "./img",
        },
        {
          from: "./src/uploads",
          to: "./uploads",
        },
      ],
    }),
  ].concat(htmlPlugins),
  // devServer: {
  //   contentBase: "./dist",
  // },
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebpackPlugin());
  }
  return config;
};
