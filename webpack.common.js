const HtmlWebPackPlugin = require("html-webpack-plugin");

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
    new HtmlWebPackPlugin({
      template: "./src/graph-displayer.html",
      filename: "./graph-displayer.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/graph-chooser.html",
      filename: "./graph-chooser.html"
    })
  ]
}