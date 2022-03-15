// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'REWORTH DIRECTORY',
  tagline: 'REWORTH REWARDS',
  url: 'https://ShocKWavEv1.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'reworthrewards', // Usually your GitHub org/user name.
  projectName: 'directory-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      hideableSidebar: true,
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ If you have a business feel free to signup and be part of <a target="_blank" rel="noopener noreferrer" href="https://reworth.app/login/signup?__hstc=54938548.e79190d7d2aa29540118d280c117831b.1647031460157.1647042019022.1647305107805.3&__hssc=54938548.1.1647305107805&__hsfp=705156067&_gl=1*11de7pp*_ga*MzQzNzQyMzk2LjE2NDcwMzE0NjA.*_ga_12VW35S53P*MTY0NzMwNTEwOC40LjEuMTY0NzMwNTEwOC42MA..&_ga=2.21945470.495095850.1647305108-343742396.1647031460">REWORTH</a>',
        backgroundColor: '#2E58FF',
        textColor: '#fff',
        isCloseable: false,
      },
      navbar: {
        title: 'Reworth Directory',
        hideOnScroll: true,
        logo: {
          alt: 'REWORTH',
          src: 'img/logo-small.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
          {href: 'https://www.reworth.co/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/reworthrewards/directory-react-component',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        apiKey: 'b8c6267c444b8e733570ac5ab4d2e3ee',
        indexName: 'edy',
        appId: 'HXJSB0I3EO',
  
        // Optional: see doc section bellow
        // contextualSearch: true,
  
        //... other Algolia params
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" rel="noopener noreferrer" href="https://reworth.co/">REWORTH</a> | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
