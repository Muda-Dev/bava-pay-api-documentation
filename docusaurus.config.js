// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My API Documentation',
  tagline: 'Documenting APIs Made Easy',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bava-doc.netlify.app/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'bava',
  projectName: 'bava-api-doc',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Makes documentation the homepage
          editUrl:
            'https://github.com/your-org/bava-api-doc/tree/main/docs/',
        },
        blog: false, // Disable the blog if it's not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'https://bavagroup.com/images/logo-sm.svg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Documentation Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;