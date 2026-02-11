import { addDecorator } from '@storybook/react';
import { RouterDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook';

import { Theme } from '../../src/app/providers/theme-provider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.DEFAULT));
addDecorator(RouterDecorator);
