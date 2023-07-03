import HtmlWebpackPlugin from "html-webpack-plugin";
import  webpack  from "webpack";

export function buildPlugins(pathsHtml:string):webpack.WebpackPluginInstance[] {

  return [
    new HtmlWebpackPlugin({
      template: pathsHtml,
    }),
    new webpack.ProgressPlugin(),
  ]
};