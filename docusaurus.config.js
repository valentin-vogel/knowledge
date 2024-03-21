// @ts-check

import { themes as prismThemes } from 'prism-react-renderer'
import 'dotenv/config'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Valentin's Knowledge",
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.URL || '',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'valentin-vogel', // Usually your GitHub org/user name.
  projectName: 'knowledge', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Valentin's Knowledge",
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Knowledge',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/valentin-vogel/knowledge',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Valentin Vogel.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config
