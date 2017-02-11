module.exports = {
  entry: ["babel-polyfill", "./app/index.jsx"],
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}

