import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths,mode } = options;
  const {build,entry, html } = paths;
  return {
    mode,
    entry,
    output: {
      filename: '[name][contenthash].js',
      path: build,
      clean: true,
    },
    plugins: buildPlugins(html),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}