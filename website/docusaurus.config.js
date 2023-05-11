const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    plugins: [
      [
        'docusaurus-plugin-typedoc',

        // Plugin / TypeDoc options
        {
          entryPoints: ['../src/index.tsx'],
          tsconfig: '../tsconfig.json',
          readme: 'none',
          sidebar: {
            categoryLabel: 'API Reference',
            collapsed: false,
            // position: 0,
            fullNames: true,
          },
        },
      ],
    ],
    title: 'Review Master',
    tagline:
      'A library to visualize business intelligence derived from sentiment analysis on product reviews',
    url: 'https://boraelci.github.io',
    baseUrl: '/review-master/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl:
              'https://github.com/facebook/docusaurus/edit/main/website/',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Review Master',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'api/index',
              position: 'left',
              label: 'Docs',
            },
            // {to: '/blog', label: 'Example', position: 'left'},
            {
              href: 'https://github.com/boraelci/review-master',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'About',
              items: [
                {
                  label: 'Docs',
                  to: '/docs/api/index',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/boraelci/review-master',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Review Master by Bora Elci. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
