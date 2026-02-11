import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { buildPlugins } from './build-plugins';
import { buildDevServer } from './build-dev-server';

export const buildWebpackConfig = (option: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = option;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(option),
    },
    resolve: buildResolvers(option),
    plugins: buildPlugins(option),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(option) : undefined,
  };
};
