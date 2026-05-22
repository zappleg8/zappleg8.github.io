import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import terminalTheme from './src/styles/terminal-theme.json';

export default defineConfig({
  site: 'https://zachapplegate.com',
  integrations: [
    expressiveCode({
      themes: [terminalTheme],
      styleOverrides: {
        borderColor: '#232325',
        borderRadius: '10px',
        codeBackground: '#0A0A0B',
        frames: {
          editorTabBarBackground: '#0E0E11',
          editorActiveTabBackground: '#0A0A0B',
          editorActiveTabIndicatorBottomColor: '#A99CF2',
          terminalTitlebarBackground: '#0E0E11',
          terminalBackground: '#0A0A0B',
          terminalTitlebarBorderBottomColor: '#232325',
        },
      },
    }),
    sitemap(),
  ],
});
