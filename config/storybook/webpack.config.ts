import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/build-css-loaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push(paths.src);
  config.module.rules.push(buildCssLoader(true));
  // 👇 Добавляем алиас для '@/'
  // eslint-disable-next-line no-param-reassign
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': paths.src,
  };
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /|.svg/i };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  return config;
};
