const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin([
      // { from: 'node_modules/@wildfalcon', to: 'node_modules/@wildfalcon' },
      // { from: 'node_modules/@webcomponents', to: 'node_modules/@webcomponents' },
      // { from: 'public', to: 'public' },
    ])
  ]
}