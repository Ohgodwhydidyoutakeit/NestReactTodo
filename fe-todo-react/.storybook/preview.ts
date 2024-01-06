import type { Preview } from "@storybook/react";
import i18n from '../src/i18n';
import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

export const parameters = {
  //...,
  i18n,
  locale: 'en',
  locales: {
    en: { title: 'English', left: '🇺🇸' },
    es: { title: 'Espanyol', left: '🇪🇸' },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
